import {ProductsListInBasket} from "../../../widgets/productsListInBasket";
import {withDataLoadingHandler} from "../../withDataLoadingHandler.ts";

const ProductsListInBasketEnhanced = withDataLoadingHandler(ProductsListInBasket)

export const Basket = () => <ProductsListInBasketEnhanced />