import React from "react";
import { IProduct } from "../products/productInterface";
import ProductButton from "./productButton";

interface Iprops {
    product: IProduct
}

const ProductCard: React.FC<Iprops> = (props: Iprops) => {
    return ( 
        <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-4">
        <li>
            <div className="px-1 py-2 sm:px-6">
                <div className="flex items-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-800 pr-1">{props.product.title}</h3>
                    <p className="mt-1 max-w-2xl  text-sm text-gray-500">{props.product.description}</p>
                </div> 
                <div className="mt-4 flex items-center justify-between">
                        <ProductButton id={props.product.id as number} />
                        <div className="flex items-end justify-between">
                        <h3 className="text-md leading-6 font-medium text-blue-400 ">${props.product.price}</h3>
                        </div>
                 </div>
            </div>
        </li>
        </ul>  
    );
}

export default ProductCard;