import React from "react";
import { IProduct } from "../products/productInterface";
import ProductButton from "./productButton";

interface Iprops {
    product: IProduct
}

const ProductCard: React.FC<Iprops> = (props: Iprops) => {
    return (
        <div className="rounded border-white justify-center my-5">
            <div className="space-y-2">
                <div className="grid grid-cols-2 justify-start" >
                    <div>
                        <h5> ProductName: </h5>
                    </div>
                    <div>
                        <h4 >{props.product.title}</h4>
                    </div>
                    <div><h5>Description: </h5> </div>  <div className="grow overflow-auto"> <h4>{props.product.description}</h4></div>
                    <div>
                        <h5>Price: </h5></div> <div className="grow overflow-auto"><h4>{props.product.price}</h4></div>                   
                </div>               
            </div>
            <div className="flex justify-center px-1">
                        <ProductButton id={props.product.id} />
        </div>
        </div>
    );
}

export default ProductCard;