import type {FC} from "react";
import {Outlet} from "react-router";
import {Paper} from "../../UI";
import {ContentWrapper, Wrapper} from "./style.ts";
import {Header} from "../../widgets/header";

export const BaseLayout: FC = () => (
    <Wrapper>
        <Header/>
        <ContentWrapper>
            <Paper>
                <Outlet />
            </Paper>
        </ContentWrapper>
    </Wrapper>
)