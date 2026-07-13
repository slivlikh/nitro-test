import {useQuery} from '@tanstack/react-query'
import {productsQueryOptions} from "./productsQueryOptions.ts";


export function useProducts() {
    return useQuery({
        ...productsQueryOptions(),
        staleTime: 'static',
    })
}