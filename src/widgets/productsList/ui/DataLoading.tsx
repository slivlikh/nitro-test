import {ProductsList} from "./ProductsList.tsx";
import {useDataLoading} from "../api/useDataLoading.ts";

export const DataLoading = () => {

    useDataLoading()

    return <ProductsList />
}