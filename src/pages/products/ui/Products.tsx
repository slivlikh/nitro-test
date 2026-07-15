import {ProductsList} from "../../../widgets/productsList";
import {withDataLoadingHandler} from "../../withDataLoadingHandler.ts";

const ProductsListEnhanced = withDataLoadingHandler(ProductsList)

export const Products = () => <ProductsListEnhanced />
