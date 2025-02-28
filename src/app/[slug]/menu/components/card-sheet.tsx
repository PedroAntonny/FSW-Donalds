import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CardContext } from "../context/card";
import CardProductItem from "./card-product-item";
import FinishOrderDialog from "./finish-order-dialog";

const CardSheet = () => {
  const [finishOrderDialogIsOpen, setFinishOrderDialogIsOpen] = useState(false);
  const { isOpen, toggleCard, products, total } = useContext(CardContext);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCard}>
      <SheetContent className="w-[85%]">
        <SheetHeader>
          <SheetTitle>Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => {
              return <CardProductItem key={product.id} product={product} />;
            })}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          <Button
            className="w-full rounded-full"
            onClick={() => setFinishOrderDialogIsOpen(true)}
          >
            Finalizar Pedido
          </Button>
          <FinishOrderDialog
            isOpen={finishOrderDialogIsOpen}
            onOpenChange={setFinishOrderDialogIsOpen}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CardSheet;
