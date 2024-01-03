import { IProduct } from './productInterface';
import { faker } from '@faker-js/faker';

function CreateProducts(): IProduct {
    return {
        id: faker.number.int(),
        title: faker.string.alpha(),
        description: faker.string.alpha(),
        price: faker.number.float(),
        rating: faker.number.float(),
        brand: faker.string.alpha(),
        category: faker.string.alpha(),
    };
}

export const mockProducts: IProduct[] = faker.helpers.multiple(CreateProducts, {
    count: 5
});

export const mockProduct: IProduct = CreateProducts();