'use client'
import { useRouter } from "next/navigation";
import React,{FC} from 'react';
import Link from "next/link";

interface numberProps {
    id: number,
  }
  
 const ProductButton: FC<numberProps> = (props: numberProps) =>{
   // const router = useRouter();
   const href = `products/${props.id}`;
  //   const handleClick=()=>{
  //  router.push(`products/${props.id}`)
  //   }
    return(
      <Link href= {href} className="hover:text-gray-300">View Product</Link>
//<button onClick={handleClick} value ="Go To Product"/>
);
}
export default ProductButton;