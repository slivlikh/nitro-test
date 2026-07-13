import {useQuery} from '@tanstack/react-query'
import {type Product as ProductType} from "../../shema.ts";
import {productsQueryOptions} from "./productsQueryOptions.ts";


export function useProduct({id}: { id: ProductType['id'] }) {
    return useQuery({
        ...productsQueryOptions(),
        select: (data) => {
            return data.find((product) => id === product.id)
        }
    })
}