import {Router} from "../router";
import {Paper} from "../../UI";
import {BasketIndicator} from "../../widgets/basketIndicator";
import {ContentWrapper, HeaderWrapper, Wrapper} from "./style.ts";

export const BaseLayout = () => {

    return (
        <Wrapper>
            <HeaderWrapper>
                <Paper>
                    <BasketIndicator/>
                </Paper>
            </HeaderWrapper>
            <ContentWrapper>
                <Paper>
                    <Router/>
                </Paper>
            </ContentWrapper>
        </Wrapper>
    )
}