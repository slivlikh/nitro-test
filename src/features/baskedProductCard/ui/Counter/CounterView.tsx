import {type FC} from "react";
import {type BasketItem} from "../../../../shared/api";
import {useUpdateQuantity} from "./useUpdateQuantity.ts";
import {Counter} from "../../../../UI";

type CounterProps = {
    quantity: BasketItem['quantity'],
    productId: BasketItem['id'],
    isDisabled: boolean
}


export const CounterView: FC<CounterProps> = ({quantity, productId, isDisabled}) => {

    const {
        handleChange,
        isPending,
        key,
    } = useUpdateQuantity(productId)

    return (
        <Counter isDisabled={isDisabled || isPending} initQuantity={quantity} onChange={handleChange} key={key} />
    )
}