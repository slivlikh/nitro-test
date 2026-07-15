import {lazy} from "react";
import {Route, Routes, Navigate} from "react-router";
import {NotExistsError} from "../../widgets/errors";
import {withChunkLoadingHandler} from "./withChunkLoadingHandler.ts";
import {BaseLayout} from "../layout";

const ProductsLazy = lazy(() =>
    import('../../pages/products').then((module) => ({default: module.Products}))
);
const BasketLazy = lazy(() =>
    import('../../pages/basket').then((module) => ({default: module.Basket}))
);

const BasketLazyEnhanced = withChunkLoadingHandler(BasketLazy)
const ProductsLazyEnhanced = withChunkLoadingHandler(ProductsLazy)

export const Router = () => (
    <Routes>
        <Route path="/" element={<BaseLayout />}>
            <Route index element={<Navigate to="/products" replace/>}/>
            <Route path="products" element={<ProductsLazyEnhanced/>}/>
            <Route path="basket" element={<BasketLazyEnhanced/>}/>
            <Route path='*' element={<NotExistsError />} />
        </Route>
    </Routes>
)
