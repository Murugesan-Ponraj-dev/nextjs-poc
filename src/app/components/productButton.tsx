'use client'
import React,{FC} from 'react';
import Link from "next/link";

interface numberProps {
    id: number,
  }
  
 const ProductButton: FC<numberProps> = (props: numberProps) =>{
   const href = `products/${props.id}`; 
    return(
      <Link href= {href} className="text-blue-500 underline">View Product</Link>
);
}
export default ProductButton;