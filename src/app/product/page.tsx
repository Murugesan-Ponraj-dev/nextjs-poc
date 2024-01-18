'use client'
import React from "react";
import ProductForm from '../components/productForm';
import { IProduct } from "../products/productInterface";
import productSevice from "../services/productSevice";
import { useRouter } from 'next/navigation'

export default async function AddProduct() {
  const router = useRouter()
  function CreateProductItem(product: IProduct) {
    productSevice.create(product);
    router.push('/products')
  }
  return (

    <ProductForm CreateItem={CreateProductItem} />

  )
}


