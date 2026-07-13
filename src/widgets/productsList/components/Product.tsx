import type {FC} from 'react'
import {
    useProduct,
    type Product as ProductType,
    useItemQuantityInBasket,
} from "../../../shared/api";
import {assertNonNullable} from "../../../utils/assertions";
import {ProductCard} from "../../../features/";

type ProductProps = {
    id: ProductType['id']
}

export const Product: FC<ProductProps> = ({id}) => {
    const {data: product} = useProduct({id})
    const {data: quantity} = useItemQuantityInBasket(id)

    assertNonNullable(product)
    assertNonNullable(quantity)

    return <ProductCard product={product} quantity={quantity}/>
}