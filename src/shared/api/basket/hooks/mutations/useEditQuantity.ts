import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editQuantity} from "../../basket.ts";

export function useEditQuantity(options = {}) {
    const queryClient = useQueryClient()

    return useMutation({
        ...options,
        mutationFn: editQuantity,
        onSuccess: (nextBasket) => {
            queryClient.setQueryData(
                ['basket'],
                () => nextBasket,
            )
        }
    })
}