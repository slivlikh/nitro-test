import {queryOptions} from "@tanstack/react-query";
import {fetchBasket} from "../../basket.ts";

export function basketQueryOptions() {
    return queryOptions({
        queryKey: ['basket'],
        queryFn: fetchBasket,
        refetchOnMount: false,
    });
}

