import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CardContext, CardProduct } from "../context/card";

interface CardProductItemProps {
  product: CardProduct
}

const CardProductItem = ({ product }: CardProductItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } = useContext(CardContext);

  return ( 
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>

      <div className="space-y-1">
        <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
        <p className="text-sm font-semibold text-left">{formatCurrency(product.price)}</p>
        
        <div className="flex items-center gap-1 text-center">
          <Button variant='outline' className="w-7 h-7 rounded-lg" onClick={() => decreaseProductQuantity(product.id)}>
            <ChevronLeftIcon />
          </Button>
          <p className="text-xs w-7">{product.quantity}</p>
          <Button variant='destructive' className="w-7 h-7 rounded-lg" onClick={() => increaseProductQuantity(product.id)}>
            <ChevronRightIcon />
          </Button>
          </div>
        </div>
      </div>

      <Button variant='outline' className="w-7 h-7 rounded-lg " onClick={() => removeProduct(product.id)}>
        <TrashIcon />
      </Button>
    </div>
  );
}
 
export default CardProductItem;