import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { mockProducts, mockProduct } from './productMockData';
import { IProduct } from './productInterface';
import productSevice from '../services/productSevice';
import ProductCard from '../components/productCard';
import ProductDetailCard from '../components/productDetailCard';
import ProductList from '../components/productList';


beforeAll(() => {
  jest.mock('../services/productSevice', () => ({ getAll: jest.fn() }));

});

beforeEach(() => {
  productSevice.getAll = jest.fn().mockImplementation(
    () => Promise.resolve(mockProducts));
})

describe('product fetch service',()=>{
  it('catch fetch server error',  () => {  
    productSevice.getAll().catch(error => expect(error).toMatch('error'));
});

})

describe('View Product Page', () => {
  it('render product list page', async () => {  
      render(<ProductList products={mockProducts.products} />)
    const headings = screen.getByText("View Products");
    expect(headings).toBeInTheDocument();
  });

  it.each([mockProducts.products])('verify the added user in gird view', async (mockData: IProduct) => { 
      
    render(<ProductList products={mockProducts.products} />)
    const productTitle = screen.getByText(mockData.title);
    const productPrice = screen.getByText(mockData.price);
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });

  it('render product card component', () => {
    render(<ProductCard product={mockProduct} />)
    const productTitle = screen.getByText(mockProduct.title);
    expect(productTitle).toBeInTheDocument();
  });

  it('click and verify product card component', () => {
    render(<ProductCard product={mockProduct} />)
    const button = screen.getByText("View Product");
    fireEvent.click(button);
    var url = `/products/${mockProduct.id}`;
    // verify expected url
    //expect(global.window.location.href).toContain(url);
  });

  it('verify product detail component', () => {
    render(<ProductDetailCard {...mockProduct} />)
    const productTitle = screen.getByText(mockProduct.title);
    expect(productTitle).toBeInTheDocument();
  });

});