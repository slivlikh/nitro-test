import {Paper} from "../../../UI";
import {BasketIndicator} from "../../../features";
import {Wrapper} from "./style.ts";

export const Header = () => (
    <Wrapper>
        <Paper>
            <BasketIndicator/>
        </Paper>
    </Wrapper>
)