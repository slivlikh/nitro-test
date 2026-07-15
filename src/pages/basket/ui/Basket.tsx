import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {ProductsListInBasket} from "../../../widgets/productsListInBasket";
import {Spinner} from "../../../UI";
import {DataLoadingError} from "../../../widgets/errors";

export const Basket = () => (
    <Suspense fallback={<Spinner/>}>
        <ErrorBoundary fallbackRender={({resetErrorBoundary}) => <DataLoadingError onRetry={resetErrorBoundary}/>}>
            <ProductsListInBasket/>
        </ErrorBoundary>
    </Suspense>
)