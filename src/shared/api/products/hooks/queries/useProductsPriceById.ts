import {useQuery} from '@tanstack/react-query'
import {productsQueryOptions} from "./productsQueryOptions.ts";
import type {Product} from "../../shema.ts";


export function useProductsPriceById() {
    return useQuery({
        ...productsQueryOptions(),
        select: (data) => {
            return data.reduce((acc: Record<Product['id'], Product['price']>, product) => {
                acc[product.id] = product.price
                return acc
            }, {})
        }
    })
}