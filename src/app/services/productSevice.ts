import {Get, Post} from "./fetchService";
import * as ApiEndpoint from "../Constants/apiEndPoints";
import { IProduct,IProductsResponse } from "../products/productInterface";


class ProductDataService 
{
    getAll =()=>{
       return Get<IProductsResponse>(ApiEndpoint.GET_ALLPRODUCTS);     
    }

    getProduct =(id:number)=>{
        return Get<IProduct>(ApiEndpoint.GET_PRODUCT+id);
    }

    create = (data:IProduct)=>{
        return Post<IProduct>(ApiEndpoint.ADD_PRODUCT, data);
    }
     getProducts=()=> {
        return this.getAll().then(res => { return res.products; });
    }    
}
export default new ProductDataService;
