import {useDataLoading} from "../api/useDataLoading.ts";
import {ProductsListInBasket} from "./ProductsListInBasket.tsx";

export const DataLoading = () => {

    useDataLoading()

    return <ProductsListInBasket />
}