import { IProduct, IProductsResponse } from './productInterface';
import { faker } from '@faker-js/faker';

function CreateProducts(): IProduct {
    return {
        id: faker.number.int(),
        title: faker.string.alphanumeric(5),
        description: faker.string.alphanumeric(15),
        price: faker.number.float(),
        rating: faker.number.float(),
        brand: faker.string.alphanumeric(7),
        category: faker.string.alphanumeric(4),
        discountPercentage: faker.number.int(),
        stock:faker.number.int(),
        thumbnail:faker.string.alphanumeric(2),
        images:[],
    };
}

 const products: IProduct[] = faker.helpers.multiple(CreateProducts, {
    count: 5
});
export const mockProducts: IProductsResponse = { products: products, skip: faker.number.int(),total:faker.number.int(),limit:faker.number.int() };

export const mockProduct: IProduct = CreateProducts();