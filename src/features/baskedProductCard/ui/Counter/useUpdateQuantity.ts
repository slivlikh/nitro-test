import {useState} from "react";
import {useEditQuantity} from "../../../../shared/api/basket/hooks/mutations/useEditQuantity.ts";
import type {BasketItem} from "../../../../shared/api";

export function useUpdateQuantity(productId: BasketItem['id']) {
    const [key, setKet] = useState(() => Math.random())

    const {mutateAsync, isPending} = useEditQuantity()


    const handleChange = (nextQuantity: number) => {
        return mutateAsync({
            productId,
            quantity: nextQuantity,
        }).finally(() => {
            setKet(Math.random())
        })
    }

    return {handleChange, isPending, key}
}