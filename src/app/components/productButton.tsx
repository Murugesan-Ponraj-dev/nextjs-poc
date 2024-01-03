'use client'
import React,{FC} from 'react';
import Link from "next/link";

interface numberProps {
    id: number,
  }
  
 const ProductButton: FC<numberProps> = (props: numberProps) =>{
   const href = `products/${props.id}`; 
    return(
      <Link href= {href} className="hover:text-gray-300 focus:outline-none text-white bg-green-700 hover:bg-green-800 ">View Product</Link>
);
}
export default ProductButton;