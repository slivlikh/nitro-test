import {useBasket, useProductsPriceById} from "../../../shared/api";
import {Product} from "./Product.tsx";
import {Total} from "./Total.tsx";
import {EmptyScreen} from "./EmptyScreen.tsx";
import {assertNonNullable} from "../../../utils/assertions";

export const ProductsListInBasket = () => {

    const {data: productIdToPrice} = useProductsPriceById()
    const {data: basket} = useBasket()

    assertNonNullable(basket)
    assertNonNullable(productIdToPrice)

    if (basket.length === 0) {
        return <EmptyScreen/>
    }

    return (
        <>
            <div>
                {basket.map(({id}) => <Product key={id} id={id}/>)}
            </div>
            <hr/>
            <Total basket={basket} productIdToPrice={productIdToPrice}/>
        </>
    )
}