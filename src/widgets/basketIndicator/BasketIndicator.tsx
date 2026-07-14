import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {BasketIndicatorView} from "./BasketIndicatorView.tsx";

export const BasketIndicator = () => (
    <Suspense fallback=''>
        <ErrorBoundary fallbackRender={() => null}>
            <BasketIndicatorView/>
        </ErrorBoundary>
    </Suspense>
)