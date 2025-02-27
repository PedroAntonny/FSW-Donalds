import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CardContext } from "../context/card";



const CardSheet = () => {
  const { isOpen, toggleCard } = useContext(CardContext);

  return ( 
       <Sheet open={isOpen} onOpenChange={toggleCard}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sacola</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
      </Sheet>
  );
}
 
export default CardSheet;