import {Get, Post} from "./fetchService";
import * as ApiEndpoint from "../Constants/apiEndPoints";
import { IProduct } from "../products/productInterface";


class ProductDataService 
{
    getAll =()=>{
        return Get<Array<IProduct>>(ApiEndpoint.GET_ALLPRODUCTS);
    }

    getProduct =(id:number)=>{
        return Get<IProduct>(ApiEndpoint.GET_PRODUCT+id);
    }

    create = (data:IProduct)=>{
        return Post<IProduct>(ApiEndpoint.ADD_PRODUCT, data);
    }
}
export default new ProductDataService;
