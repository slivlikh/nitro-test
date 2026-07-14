import {useSuspenseQueries} from "@tanstack/react-query";
import {productsQueryOptions} from "../../../shared/api/products/hooks/queries/productsQueryOptions.ts";
import {basketQueryOptions} from "../../../shared/api/basket/hooks/queries/basketQueryOptions.ts";


export function useDataLoading() {
    return useSuspenseQueries({
        queries: [{
            ...productsQueryOptions(),
            staleTime: 'static',
        }, {
            ...basketQueryOptions(),
            staleTime: 'static',
        }]
    })
}