import {useSearchParams} from "react-router";
import {useProductIds} from "../../../shared/api";
import {Product} from "./Product.tsx";
import {Filters} from "./Filters.tsx";
import {assertNonNullable} from "../../../utils/assertions";

export const ProductsList = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category')

    const {data: productIds} = useProductIds({category})

    assertNonNullable(productIds)

    return (
        <div>
            <Filters/>

            <div>
                {productIds.map((id) => <Product key={id} id={id}/>)}
            </div>
        </div>
    )

}