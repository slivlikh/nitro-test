import {useQuery} from '@tanstack/react-query'
import {basketQueryOptions} from "./basketQueryOptions.ts";
import type {Product as ProductType} from "../../../products";


export function useItemQuantityInBasket(productId: ProductType['id']) {
    return useQuery({
        ...basketQueryOptions(),
        select: (data) =>
            data.find(({id}) => id === productId)?.quantity ?? 0
    })
}