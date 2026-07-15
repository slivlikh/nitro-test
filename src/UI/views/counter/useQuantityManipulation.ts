import {type ChangeEventHandler, useMemo, useState} from "react";
import {debounce} from "lodash-es";

export function useQuantityManipulation(initQuantity: number, onChange: (newQuantity: number) => void, debounceTime: number) {
    const [quantity, setQuantity] = useState(initQuantity)



    const handleUpdateCounterDebounced = useMemo(() => debounce((nextQuantity: number) => {
        onChange(nextQuantity)
    }, debounceTime, {trailing: true}), [debounceTime, onChange])


    const handleIncrease = () => {
        setQuantity((prevQuantity) => {
            const nextQuantity = prevQuantity + 1;
            handleUpdateCounterDebounced(nextQuantity);
            return nextQuantity;
        })
    }

    const handleDecrease = () => {
        setQuantity((prevQuantity) => {
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
        setQuantity(nextQuantity);
    }

    return {quantity, handleIncrease, handleDecrease, handleChange}
}