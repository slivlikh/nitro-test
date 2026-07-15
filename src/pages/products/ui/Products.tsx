import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {ProductsList} from "../../../widgets/productsList";
import {Spinner} from "../../../UI";
import {DataLoadingError} from "../../../widgets/errors";

export const Products = () => (
    <Suspense fallback={<Spinner/>}>
        <ErrorBoundary fallbackRender={({resetErrorBoundary}) => <DataLoadingError onRetry={resetErrorBoundary}/>}>
            <ProductsList/>
        </ErrorBoundary>
    </Suspense>
)
