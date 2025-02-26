'use client'

import { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{ include: { restaurant: {
    select: {
      name: true,
      avatarImageUrl: true,
    }
  } } }>
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    })
  }
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return ( 
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl p-5 flex-auto flex flex-col">
     <div className="flex-auto">
         <div className="flex items-center gap-1.5">
      <Image src={product.restaurant.avatarImageUrl} alt={product.restaurant.name} width={16} height={16} className="rounded-full" />
      <p className="text-xs text-muted-foreground ">{product.restaurant.name}</p>
        </div>

        <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{formatCurrency(product.price)}</h3>
          <div className="flex items-center gap-3 text-center">
            <Button variant='outline' className="h-8 w-8 rounded-xl" onClick={handleDecreaseQuantity}>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <p className="w-4">{quantity}</p>
            <Button variant='destructive' className="h-8 w-8 rounded-xl" onClick={handleIncreaseQuantity}>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h4 className="font-medium">Sobre</h4>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div className="mt-6 rounded-md border border-dashed p-4">
          <div className="flex items-center gap-2 mb-3">
            <ChefHatIcon className="h-5 w-5" />
            <h4 className="font-medium">Ingredientes</h4>
          </div>
          
          <ul className="space-y-2">
            {product.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {ingredient}
              </li>
            ))}
          </ul>
        </div>
     </div>

      <Button className="w-full rounded-full mt-6">Adicionar à sacola</Button>
    </div>
  );
}
 
export default ProductDetails;