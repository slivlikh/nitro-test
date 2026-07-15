import {ErrorBoundary} from "react-error-boundary";
import {type ComponentType, Suspense} from "react";


export const withSuspenseHandler =
    (Spinner: ComponentType) =>
        (FallbackError: ComponentType<{ onRetry: () => void }>) =>
            <P extends object>(Component: ComponentType<P>) => (props: P) => (
                <Suspense fallback={<Spinner/>}>
                    <ErrorBoundary
                        fallbackRender={({resetErrorBoundary}) => <FallbackError onRetry={resetErrorBoundary}/>}>
                        <Component {...props} />
                    </ErrorBoundary>
                </Suspense>
            )