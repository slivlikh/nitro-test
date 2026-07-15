import { type FC } from 'react'
import {Button} from "../../elements/Button.tsx";
import {Wrapper} from "./style.ts";
import {useQuantityManipulation} from "./useQuantityManipulation.ts";

type CounterProps = {
    isDisabled: boolean;
    debounceTime?: number;
    initQuantity: number;
    onChange: (quantity: number) => void;
}

export const Counter: FC<CounterProps> = ({ isDisabled, debounceTime = 500, onChange, initQuantity }) => {
    const { quantity, handleDecrease, handleIncrease, handleChange } = useQuantityManipulation(initQuantity, onChange, debounceTime)

    return (
        <Wrapper>
            <Button disabled={quantity === 1 || isDisabled} onClick={handleDecrease}>-</Button>
            <input disabled={isDisabled} type="number" min="1" value={quantity}
                   onChange={handleChange}/>
            <Button disabled={isDisabled} onClick={handleIncrease}>+</Button>
        </Wrapper>
    )
}