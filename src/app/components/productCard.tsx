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
                        <ProductButton id={props.product.id} />
                        <div className="flex items-end justify-between">
                        <h3 className="text-md leading-6 font-medium text-blue-400 ">${props.product.price}</h3>
                        </div>
                    {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a> */}
                </div>
            </div>
        </li>
        </ul> 

        // <div className="rounded border-white justify-center my-5">
        //     <div className="space-y-2">
        //         <div className="grid grid-cols-2 justify-start" >
        //             <div>
        //                 <h5> ProductName: </h5>
        //             </div>
        //             <div>
        //                 <h4 >{props.product.title}</h4>
        //             </div>
        //             <div><h5>Description: </h5> </div>  <div className="grow overflow-auto"> <h4>{props.product.description}</h4></div>
        //             <div>
        //                 <h5>Price: </h5></div> <div className="grow overflow-auto"><h4>{props.product.price}</h4></div>                   
        //         </div>               
        //     </div>
        //     <div className="flex justify-center px-1">
        //                 <ProductButton id={props.product.id} />
        // </div>
        // </div>
    );
}

export default ProductCard;