import { type FC } from "react";
import {ProductsList} from "./ProductsList.tsx";
import {useDataLoading} from "../api/useDataLoading.ts";

export const DataLoading: FC = () => {

    useDataLoading()

    return <ProductsList />
}