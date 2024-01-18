'use client'
import React, { useState } from 'react';
import { IProduct } from '../products/productInterface';

interface Iprops {
    CreateItem(props: IProduct): void
}

const ProductForm: React.FC<Iprops> = (submitItem: Iprops) => {
    const [product, setProduct] = useState<IProduct>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    return (
        <div className="relative lg:container mx-auto px-3 p-2">
            <section className="bg-white">
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black  text-center">Add a new product</h2>
                    <form className="max-w-sm mx-auto">
                        <input type="text" className="textbox-primary" placeholder="Product Title" value={product?.title} onChange={onChange} />
                        <input type="text" className="textbox-primary" placeholder="Product Description" value={product?.description} onChange={onChange} />
                        <input type="text" className="textbox-primary" placeholder="Product Price" value={product?.price} onChange={onChange} />
                        <input type="text" className="textbox-primary" placeholder="Product Brand" value={product?.brand} onChange={onChange} />
                        <input type="text" className="textbox-primary" placeholder="Product Rating" value={product?.rating} onChange={onChange} />
                        <input className="p-2 m-2 mb-100 bg-blue-200 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " onClick={() => { submitItem.CreateItem(product as IProduct) }} type="button" value="Submit" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ProductForm;