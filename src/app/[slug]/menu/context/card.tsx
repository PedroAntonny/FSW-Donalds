'use client'

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

  interface CardProduct extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'> {
    quantity: number;
  }

  export interface ICardContext {
    isOpen: boolean;
    products: CardProduct[];
    toggleCard: () => void;
    addProduct: (product: CardProduct) => void;
  };

  export const CardContext = createContext<ICardContext>({
    isOpen: false,
    products: [],
    toggleCard: () => {},
    addProduct: () => {},
  })

  export const CardProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<CardProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleCard = () => {
      setIsOpen(prev => !prev);
    }

    const addProduct = (product: CardProduct) => {
      setProducts(prev => [...prev, product]);
    }

    // const removeProduct = (productId: string) => {
    //   setProducts(prev => prev.filter(product => product.id !== productId));
    // }

    return (
      <CardContext.Provider value={{
        isOpen,
        products,
        toggleCard,
        addProduct,
      }}>
        {children}
      </CardContext.Provider>
    )
      

  }
