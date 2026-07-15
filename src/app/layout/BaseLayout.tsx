import {Router} from "../router";
import {Paper} from "../../UI";
import {ContentWrapper, Wrapper} from "./style.ts";
import {Header} from "../../widgets/header";

export const BaseLayout = () => (
    <Wrapper>
        <Header/>
        <ContentWrapper>
            <Paper>
                <Router/>
            </Paper>
        </ContentWrapper>
    </Wrapper>
)