import {useQuery} from '@tanstack/react-query'
import {productsQueryOptions} from "./productsQueryOptions.ts";


export function useProductIds({category}: { category: string | null }) {
    return useQuery({
        ...productsQueryOptions(),
        select: (data) => {
            return data.filter((product) => category ? product.category === category : true).map(({id}) => id)
        }
    })
}