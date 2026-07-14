import type {FC} from 'react'
import {Link} from 'react-router'
import {useSuspenseBasket} from "../../shared/api";



export const BasketIndicatorView: FC = () => {

    const {data: basket} = useSuspenseBasket()

    const totalQuantity = basket.reduce((acc, {quantity}) => {
        return acc + quantity;
    }, 0)

    return <Link to='/basket'>Items in basket {totalQuantity}</Link>
}