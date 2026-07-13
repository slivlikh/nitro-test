import {type} from 'arktype'

const Rating = type({
    rate: 'number',
    count: 'number',
});

export const Product = type({
    id: type('number').brand("productId"),
    title: 'string',
    price: 'number',
    description: 'string',
    category: 'string',
    image: 'string',
    rating: Rating,
});


export const Products = Product.array();

export type Products = typeof Products.infer;
export type Product = typeof Product.infer;
