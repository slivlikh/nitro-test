import {useQuery} from '@tanstack/react-query'
import {uniq} from "../../../../utils/array";
import {productsQueryOptions} from "./productsQueryOptions.ts";


export function useProductsCategories() {
    return useQuery({
        ...productsQueryOptions(),
        select: (data) => {
            return uniq(data.map((product) => product.category))
        }
    })
}