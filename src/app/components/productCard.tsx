import React from "react";
import { IProduct } from "../products/productInterface";
import ProductButton from "./productButton";

const ProductCard: React.FC<IProduct> = (product: IProduct) => {

    return (
        <div style={{ border: '1px solid white', margin: '20px', padding: '20px' }} >
            <h4>{product.title}</h4>
            <h4>{product.brand}</h4>
            <h4>{product.description}</h4>
            <h4>{product.price}</h4>
            <ProductButton id={product.id}/>
        </div>
    );

}

export default ProductCard;