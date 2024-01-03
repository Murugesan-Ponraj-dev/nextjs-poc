import 'server-only'
import productSevice from "../services/productSevice";
import ProductCard from "../components/productCard";
import React, { FC } from 'react';
import { IProduct } from './productInterface';
import ProductList from '../components/productList';

async function getProducts() {
    const products = await productSevice.getAll();
    return products.products;
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
