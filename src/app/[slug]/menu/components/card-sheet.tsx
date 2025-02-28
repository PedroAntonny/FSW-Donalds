import { useContext } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CardContext } from "../context/card";
import CardProductItem from "./card-product-item";



const CardSheet = () => {
  const { isOpen, toggleCard, products } = useContext(CardContext);

  return ( 
       <Sheet open={isOpen} onOpenChange={toggleCard}>
          <SheetContent className="w-[85%]">
            <SheetHeader>
              <SheetTitle>Sacola</SheetTitle>
              <div className="py-5">
                 {products.map(product => {
                return (
                  <CardProductItem key={product.id} product={product} />
                )
              })}
              </div>
            </SheetHeader>
          </SheetContent>
      </Sheet>
  );
}
 
export default CardSheet;