"use client"
import React from "react";
import ProductForm from '../components/productForm'; 
import { IProduct } from "../products/productInterface";
import productSevice from "../services/productSevice";
 

  function CreateProductItem(product:IProduct) {   
    productSevice.create(product); 
    window.history.pushState({}, "", "/products")
 }
 
export default async function AddProduct() {
    return <ProductForm  CreateItem={CreateProductItem} />
  }
  

