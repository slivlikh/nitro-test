import {useQuery, useSuspenseQuery} from '@tanstack/react-query'
import {basketQueryOptions} from "./basketQueryOptions.ts";


export function useSuspenseBasket() {
    return useSuspenseQuery({
        ...basketQueryOptions(),
        staleTime: 'static',
    })
}

export function useBasket() {
    return useQuery({
        ...basketQueryOptions(),
        staleTime: 'static',
    })
}