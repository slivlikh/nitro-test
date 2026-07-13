import type {FC} from 'react'
import {Link} from 'react-router'
import type {Basket} from "../../shared/api/basket/shema.ts";

type BasketIndicatorViewProps = {
    basket: Basket
}


export const BasketIndicatorView: FC<BasketIndicatorViewProps> = ({basket}) => {

    const totalQuantity = basket.reduce((acc, {quantity}) => {
        return acc + quantity;
    }, 0)

    return <Link to='/basket'>Items in basket {totalQuantity}</Link>
}