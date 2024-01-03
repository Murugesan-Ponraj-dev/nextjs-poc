import 'server-only'
import React from "react";
import productSevice from "@/app/services/productSevice";
import ProductDetailCard from "@/app/components/productDetailCard";

export async function generateStaticParams(){
const products = await productSevice.getAll();
return products.map((Product)=>({
id: Product.id
}))
}

const  getProduct=(id:number)=>{
const product = productSevice.getProduct(id)
return product;
}

export default async function Product({ params }: { params: { id: number } }) {
    const product = await getProduct(params.id);
    return <ProductDetailCard {...product} />
  }
  

