'user server'
import productSevice from "../services/productSevice";
import { IProduct } from '../products/productInterface';

export async function CreateProduct(product: IProduct) {
   return await productSevice.create(product);
}
