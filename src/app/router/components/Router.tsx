import {lazy, Suspense} from "react";
import {ErrorBoundary} from 'react-error-boundary'
import {Route, Routes, Navigate} from "react-router";
import {Spinner} from "../../../UI";
import {ChunkLoadingError, NotExistsError} from "../../../widgets/errors";

const ProductsLazy = lazy(() =>
    import('../../../pages/products/components/Products.tsx').then((module) => ({default: module.Products}))
);

const BasketLazy = lazy(() =>
    import('../../../pages/basket/components/Basket.tsx').then((module) => ({default: module.Basket}))
);

export const Router = () => (
    <Suspense fallback={<Spinner/>}>
        <ErrorBoundary fallbackRender={({resetErrorBoundary}) => <ChunkLoadingError onRetry={resetErrorBoundary}/>}>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace/>}/>
                <Route path="/products" element={<ProductsLazy/>}/>
                <Route path="/basket" element={<BasketLazy/>}/>
                <Route path='*' element={<NotExistsError />} />
            </Routes>
        </ErrorBoundary>
    </Suspense>
)