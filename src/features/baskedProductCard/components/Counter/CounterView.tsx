import {type FC} from "react";
import {Button} from "../../../../UI";
import {type BasketItem} from "../../../../shared/api";
import {useQuantityManipulation} from "./hooks/useQuantityManipulation.ts";
import {Wrapper} from "./style.ts";

type CounterProps = {
    quantity: BasketItem['quantity'],
    productId: BasketItem['id'],
    isDisabled: boolean
}


export const CounterView: FC<CounterProps> = ({quantity, productId, isDisabled}) => {

    const {
        internalQuantity,
        handleIncrease,
        handleChange,
        handleDecrease,
        isPending
    } = useQuantityManipulation(quantity, productId)

    return (
        <Wrapper>
            <Button disabled={internalQuantity === 1 || isPending || isDisabled} onClick={handleDecrease}>-</Button>
            <input disabled={isPending || isDisabled} type="number" min="1" value={internalQuantity}
                   onChange={handleChange}/>
            <Button disabled={isPending || isDisabled} onClick={handleIncrease}>+</Button>
        </Wrapper>
    )
}