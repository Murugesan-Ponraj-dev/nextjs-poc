import React from "react";
import { IProduct } from "../products/productInterface";

const ProductDetailCard: React.FC<IProduct> = (product: IProduct) => {
    return (
        <div className="p-20">
        <div className="flex flex-col ps-4 pe-4 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <h4  className="p-1">{product.title}</h4>
            <h4 className="p-1">{product.rating}</h4>      
            <h4 className="p-1">{product.brand}</h4>
            <h4 className="p-1">{product.description}</h4>
            <h4 className="p-1">{product.price}</h4>               
        </div>
        </div>
    );
}

export default ProductDetailCard;