'use-client'
import productSevice from "../../services/productSevice";
import React from 'react';
import { IProduct } from './productInterface';
import ProductList from "@/app/components/productList";

async function getProducts() {
    const products = await productSevice.getAll(); 
    return products;
}

const ViewProducts: React.FC = async () => {
    const products: Array<IProduct> = await getProducts();
    
    return (
        <>
            <ProductList products={products} />
        </>
    )
}
export default ViewProducts;
