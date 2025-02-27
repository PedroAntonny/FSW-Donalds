'use client'

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

  interface CardProduct extends Product {
    quantity: number;
  }

  export interface ICardContext {
    isOpen: boolean;
    products: CardProduct[];
    toggleCard: () => void;
  };

  export const CardContext = createContext<ICardContext>({
    isOpen: false,
    products: [],
    toggleCard: () => {},
  })

  export const CardProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<CardProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleCard = () => {
      setIsOpen(prev => !prev);
    }

    return (
      <CardContext.Provider value={{
        isOpen,
        products,
        toggleCard,
      }}>
        {children}
      </CardContext.Provider>
    )
      

  }
