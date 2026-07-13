import {type ChangeEventHandler, useEffect, useMemo, useState} from "react";
import {useEditQuantity} from "../../../../../shared/api/basket/hooks/mutations/useEditQuantity.ts";
import {debounce} from "lodash-es";
import type {BasketItem} from "../../../../../shared/api";

export function useQuantityManipulation(quantity: BasketItem['quantity'], productId: BasketItem['id']) {
    const [internalQuantity, setInternalQuantity] = useState(quantity)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInternalQuantity(quantity)
    }, [quantity])

    const {mutate, isPending} = useEditQuantity({
        onError() {
            setInternalQuantity(quantity)
        }
    })

    const handleUpdateCounterDebounced = useMemo(() => debounce((nextQuantity: number) => {
        mutate({
            productId,
            quantity: nextQuantity,
        })
    }, 500, {trailing: true}), [mutate, productId])


    const handleIncrease = () => {
        setInternalQuantity((prevQuantity) => {
            const nextQuantity = prevQuantity + 1;
            handleUpdateCounterDebounced(nextQuantity);
            return nextQuantity;
        })
    }

    const handleDecrease = () => {
        setInternalQuantity((prevQuantity) => {
            if (prevQuantity === 1) {
                return prevQuantity;
            }

            const nextQuantity = prevQuantity - 1;
            handleUpdateCounterDebounced(nextQuantity);
            return nextQuantity;
        })
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const nextQuantity = Number(event.currentTarget.value);
        if (
            !Number.isInteger(nextQuantity) ||
            nextQuantity < 1
        ) {
            return
        }
        handleUpdateCounterDebounced(nextQuantity);
        setInternalQuantity(nextQuantity);
    }

    return {internalQuantity, handleIncrease, handleDecrease, handleChange, isPending}
}