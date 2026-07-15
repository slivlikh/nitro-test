import {type FC} from "react";
import Decimal from "decimal.js";
import {type Product} from "../../../shared/api";
import type {Basket} from "../../../shared/api/basket/shema.ts";

type TotalProps = {
    basket: Basket;
    productIdToPrice: Record<Product['id'], Product['price']>;
}


export const Total: FC<TotalProps> = ({basket, productIdToPrice}) => {

    const total = basket.reduce((acc, {id, quantity}) => {
        return acc.plus(new Decimal(quantity).mul(new Decimal(productIdToPrice[id])));
    }, new Decimal(0))

    return <div>Total price: ${total.toString()}</div>
}