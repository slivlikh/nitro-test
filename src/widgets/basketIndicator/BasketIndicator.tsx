import {useBasket} from "../../shared/api";
import {BasketIndicatorView} from "./BasketIndicatorView.tsx";

export const BasketIndicator = () => {
    const {data} = useBasket()


    if (data) {
        return <BasketIndicatorView basket={data}/>
    }

    return null
}