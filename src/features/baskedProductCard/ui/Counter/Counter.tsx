import type {FC} from "react";
import {type Product, type BasketItem} from "../../../../shared/api";
import {CounterView} from "./CounterView.tsx";

type CounterProps = {
    productId: Product['id'],
    quantity: BasketItem['quantity'],
    isDisabled: boolean,
}


export const Counter: FC<CounterProps> = ({productId, quantity, isDisabled}) => {
    if (quantity > 0) {
        return <CounterView quantity={quantity} productId={productId} isDisabled={isDisabled}/>
    }

    return null
}