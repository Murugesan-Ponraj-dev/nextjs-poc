import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import ViewProductsPage from './page'
import { mockProducts, mockProduct } from './productMockData';
import { IProduct } from './productInterface';
import productSevice from '../services/productSevice';
import ProductCard from '../components/productCard';
import ProductDetailCard from '../components/productDetailCard';
import { useRouter } from 'next/navigation';


beforeAll(() => {
  jest.mock('../services/productSevice', () => ({ create: jest.fn() }));

});

beforeEach(() => {
  productSevice.getAll = jest.fn().mockImplementation(
    () => Promise.resolve({ data: mockProducts, status: 200 }));
})
describe('View Product Page', () => {
  jest.mock('next/router', () => ({
    useRouter: jest.fn()
  }))
  it('render product list page', () => {
    productSevice.getAll = jest.fn().mockImplementation(
      () => Promise.resolve({ data: mockProducts, status: 200 }));
    render(<ViewProductsPage />)
    const headings = screen.getByText("View Products");
    expect(headings).toBeInTheDocument();
  });

  it.each([mockProducts])('add user and verify the added user in gird view', (mockData: IProduct) => {
    productSevice.getAll = jest.fn().mockImplementation(
      () => Promise.resolve({ data: mockProducts, status: 200 }));
    jest.mock('next/router', () => ({
      useRouter: jest.fn()
    }))
    render(<ViewProductsPage />)
    // set fake data on get all api response

    const productTitle = screen.getByText(mockData.title);
    const productPrice = screen.getByText(mockData.price);
    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });

  it('render product card component', () => {
    render(<ProductCard {...mockProduct} />)
    const productTitle = screen.getByText(mockProduct.title);
    expect(productTitle).toBeInTheDocument();
  });

  it('click and verify product card component', () => {

    // setup a new mocking function for push method
    jest.mock('next/router', () => ({
      useRouter: jest.fn()
    }))

    // setup a new mocking function for push method
    const pushMock = jest.fn()

    // mock a return value on useRouter

    render(<ProductCard {...mockProduct} />)
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