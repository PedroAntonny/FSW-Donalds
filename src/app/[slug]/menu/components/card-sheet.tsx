import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CardContext } from "../context/card";



const CardSheet = () => {
  const { isOpen, toggleCard, products } = useContext(CardContext);

  return ( 
       <Sheet open={isOpen} onOpenChange={toggleCard}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sacola</SheetTitle>
              <SheetDescription></SheetDescription>
              {products.map(product => {
                return (
                  <h1 key={product.id}>{product.name} - {product.quantity}</h1>
                )
              })}
            </SheetHeader>
          </SheetContent>
      </Sheet>
  );
}
 
export default CardSheet;