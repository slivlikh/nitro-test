import {type FC} from 'react'
import {Button, Card} from "../../../UI";
import {type Product, type BasketItem, useAddToBasket, useRemoveFromBasket} from "../../../shared/api";
import {ControlsWrapper, ProductMetaWrapper} from "./style.ts";

type ProductCardProps = {
    product: Product,
    quantity: BasketItem['quantity'],
}

export const ProductCard: FC<ProductCardProps> = ({product, quantity}) => {
    const {id, image, title, price, rating: {rate, count}} = product

    const {mutate: addToBasket, isPending: isAddPending} = useAddToBasket()
    const {mutate: removeFromBasket, isPending: isRemovePending} = useRemoveFromBasket()
    const isDisabled = isAddPending || isRemovePending


    return (
        <Card>
            <Card.Image src={image} alt={title}/>
            <Card.Title title={title}/>

            <ProductMetaWrapper>
                <Card.Price>${price}</Card.Price>
                <p>{rate} ({count})</p>

                <ControlsWrapper>
                    <Button disabled={isDisabled} onClick={() => addToBasket(id)}>Add to basket</Button>
                    {quantity > 0 ?
                        <Button disabled={isDisabled} onClick={() => removeFromBasket(id)}>
                            Remove from basket
                        </Button>
                        : null}
                </ControlsWrapper>
            </ProductMetaWrapper>


        </Card>
    )
}