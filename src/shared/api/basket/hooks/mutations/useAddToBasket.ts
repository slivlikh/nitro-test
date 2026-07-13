import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addToBasket} from "../../basket.ts";

export function useAddToBasket() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addToBasket,
        onSuccess: (nextBasket) => {
            queryClient.setQueryData(
                ['basket'],
                () => nextBasket,
            )
        }
    })
}