import { IProduct } from "../products/productInterface";
import ProductCard from "./productCard";

interface IProps{
products:IProduct[]
}
export default function ProductList(props:IProps){
return(
<div className="static md:container mx-auto px-3 p-2">
        <h1 className="text-center p-4">View Products</h1>       
        {props.products.length >0 && props.products.map(product => {
            return(
                <ProductCard key={product.id} product={product} />);
            })
        }
 </div>
)}