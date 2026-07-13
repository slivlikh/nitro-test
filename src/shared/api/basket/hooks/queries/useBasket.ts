import {useQuery} from '@tanstack/react-query'
import {basketQueryOptions} from "./basketQueryOptions.ts";


export function useBasket() {
    return useQuery({
        ...basketQueryOptions(),
        staleTime: 'static',
    })
}