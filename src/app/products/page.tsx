import 'server-only'
import productSevice from "../services/productSevice";
import Product from "../components/productCard";
import { IProduct } from './productInterface';
async function getProducts() {
    const products = productSevice.getAll();
    return products;
}

export default async function Products() {
    const productData:Promise<IProduct[]> =  getProducts();
    const products = await productData;
        return (<>
        <h1>View Products</h1>
        {
            products.length > 0 && products.map((product) => {
                <Product key={product.id} {...product} />
            })
        }
    </>)
}