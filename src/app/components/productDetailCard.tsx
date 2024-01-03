import React from "react";
import { IProduct } from "../products/productInterface";

const ProductDetailCard: React.FC<IProduct> = (product: IProduct) => {
    return (
        <div style={{ border: '1px solid white', margin: '20px', padding: '20px' }} >
            <h4>{product.title}</h4>
            <h4>{product.rating}</h4>      
            <h4>{product.brand}</h4>
            <h4>{product.description}</h4>
            <h4>{product.price}</h4>               
        </div>
    );
}

export default ProductDetailCard;