import {BasketIndicatorView} from "./BasketIndicatorView.tsx";
import {withSuspenseHandler} from "../../shared/HOCs/withSuspenseHandler.tsx";

const BasketIndicatorViewEnhanced = withSuspenseHandler(() => '')(() => null)(BasketIndicatorView)

export const BasketIndicator = () => <BasketIndicatorViewEnhanced />