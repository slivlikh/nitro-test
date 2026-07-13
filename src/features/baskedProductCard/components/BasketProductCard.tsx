import {type FC} from 'react'
import {Button, Card} from "../../../UI";
import {type Product, type BasketItem, useRemoveFromBasket} from "../../../shared/api";
import Decimal from "decimal.js";
import {ProductMetaWrapper} from "./style.ts";
import {Counter} from "./Counter";

type ProductCardProps = {
    product: Product,
    quantity: BasketItem['quantity'],
}

export const BasketProductCard: FC<ProductCardProps> = ({product, quantity}) => {
    const {image, title, price, id} = product

    const quantityDecimal = new Decimal(quantity);
    const priceDecimal = new Decimal(price);
    const totalPriceDecimal = quantityDecimal.mul(priceDecimal);

    const {mutate: removeFromBasket, isPending: isRemovePending} = useRemoveFromBasket()

    return (
        <Card>
            <Card.Image src={image} alt={title}/>
            <Card.Title title={title}/>
            <ProductMetaWrapper>
                <p>Quantity: {quantity}</p>
                <Card.Price>Total price: ${totalPriceDecimal.toString()}</Card.Price>

                <Counter productId={id} quantity={quantity} isDisabled={isRemovePending}/>
                <Button disabled={isRemovePending} onClick={() => removeFromBasket(id)}>
                    Remove from basket
                </Button>
            </ProductMetaWrapper>
        </Card>
    )
}