import {queryOptions} from "@tanstack/react-query";
import {fetchProducts} from "../../products.ts";

export function productsQueryOptions() {
    return queryOptions({
        queryKey: ['products'],
        queryFn: fetchProducts,
        refetchOnMount: false,
    });
}

