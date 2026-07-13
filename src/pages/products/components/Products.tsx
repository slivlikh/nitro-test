import {ProductsList} from "../../../widgets/productsList";
import {useBasket, useProducts} from "../../../shared/api";
import {Spinner} from "../../../UI";
import {DataLoadingError} from "../../../widgets/errors";

export const Products = () => {
    const {error: productsError, isFetching: productsIsFetching, isPending: productsIsPending} = useProducts()
    const {error: basketError, isFetching: basketIsFetching, isPending: basketIsPending} = useBasket()

    const isLoading = productsIsFetching || basketIsFetching;
    const isError = productsError || basketError;
    const isPending = productsIsPending || basketIsPending;

    if (isLoading || isPending) {
        return <Spinner/>
    }

    if (isError) {
        return <DataLoadingError/>
    }

    return <ProductsList/>
}