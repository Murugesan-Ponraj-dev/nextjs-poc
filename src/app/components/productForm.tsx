"use client"
import productSevice from "../services/productSevice";
import React, { useState } from 'react';
import { IProduct } from '../products/productInterface';
import ProductList from '../components/productList';

 interface Iprops
{
CreateItem(props:IProduct) : void
}

const ProductForm: React.FC<Iprops> = (submitItem : Iprops) => {
    const [ product, setProduct ] = useState<IProduct>();
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;        
        setProduct({ ...product, [name]: value })

    }

    return ( 
        <section className="bg-white">
            <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black  text-center">Add a new product</h2>       

        <form className="max-w-sm mx-auto" onSubmit={()=>{submitItem.CreateItem(product as IProduct)}}>
        <input type="text" className="p-2 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " placeholder="Product Title"  value={product?.title}  onChange={onChange}  />
        <input type="text" className="p-2 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " placeholder="Product Description" value={product?.description}  onChange={onChange}  />
        <input type="text" className="p-2 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " placeholder="Product Price"  value={product?.price}   onChange={onChange}  />
        <input type="text" className="p-2 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " placeholder="Product Brand"  value={product?.brand}  onChange={onChange} />
        <input type="text" className="p-2 m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " placeholder="Product Rating"  value={product?.rating}  onChange={onChange}  /> 
        <input  className="p-2 m-2 mb-100 bg-blue-200 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " type="submit" value="Submit" />
        </form>  
      </div>
      </section>
      );
}

export default ProductForm;