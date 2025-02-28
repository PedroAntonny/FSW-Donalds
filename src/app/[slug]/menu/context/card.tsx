'use client'

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

  export interface CardProduct extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'> {
    quantity: number;
  }

  export interface ICardContext {
    isOpen: boolean;
    products: CardProduct[];
    toggleCard: () => void;
    addProduct: (product: CardProduct) => void;
    decreaseProductQuantity: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
  };

  export const CardContext = createContext<ICardContext>({
    isOpen: false,
    products: [],
    toggleCard: () => {},
    addProduct: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
  })

  export const CardProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<CardProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleCard = () => {
      setIsOpen(prev => !prev);
    }

    const addProduct = (product: CardProduct) => {
      setProducts((prevProducts) => {
        const existingProduct = prevProducts.find(
          (prevProduct) => prevProduct.id === product.id
        );

        if (existingProduct) {
          return prevProducts.map((prevProduct) => {
            if (prevProduct.id === product.id) {
              return {
                ...prevProduct,
                quantity: prevProduct.quantity + product.quantity,
              };
            }
            return prevProduct;
          });
        } else {
          return [...prevProducts, product];
        }
      });
    }

    const decreaseProductQuantity = (productId: string) => {
      setProducts((prevProducts) => {
        return prevProducts.map((prevProduct) => {
          if (prevProduct.id !== productId) {
            return prevProduct;
          }
          if (prevProduct.quantity === 1) {
            return prevProduct
          }
          return {...prevProduct, quantity: prevProduct.quantity - 1}
        })
      })
    }

    const increaseProductQuantity = (productId: string) => {
      setProducts((prevProducts) => {
        return prevProducts.map((prevProduct) => {
          if (prevProduct.id !== productId) {
            return prevProduct;
          }
          return {...prevProduct, quantity: prevProduct.quantity + 1}
        })
      })
    }

    return (
      <CardContext.Provider value={{
        isOpen,
        products,
        toggleCard,
        addProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
      }}>
        {children}
      </CardContext.Provider>
    )
      

  }
