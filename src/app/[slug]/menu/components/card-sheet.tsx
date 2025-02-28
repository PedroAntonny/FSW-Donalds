import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CardContext } from "../context/card";
import CardProductItem from "./card-product-item";



const CardSheet = () => {
  const { isOpen, toggleCard, products, total } = useContext(CardContext);

  return ( 
       <Sheet open={isOpen} onOpenChange={toggleCard}>
          <SheetContent className="w-[85%]">
            <SheetHeader>
              <SheetTitle>Sacola</SheetTitle>
            </SheetHeader>
              <div className="py-5 flex flex-col h-full">
              <div className="flex-auto">
                {products.map(product => {
                return (
                  <CardProductItem key={product.id} product={product} />
                )
                })}
              </div>
              <Card className="mb-6">
                <CardContent className="p-5">
                  <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="font-semibold text-sm">{formatCurrency(total)}</p>
                  </div>
                </CardContent>
              </Card>
              <Button className="w-full rounded-full">Finalizar Pedido</Button>
              </div>
          </SheetContent>
      </Sheet>
  );
}
 
export default CardSheet;