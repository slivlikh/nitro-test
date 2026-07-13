import {useMutation, useQueryClient} from "@tanstack/react-query";
import {removeFromBasket} from "../../basket.ts";

export function useRemoveFromBasket() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: removeFromBasket,
        onSuccess: (nextBasket) => {
            queryClient.setQueryData(
                ['basket'],
                () => nextBasket,
            )
        }
    })
}