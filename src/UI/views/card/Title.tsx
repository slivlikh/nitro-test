import type {FC} from "react";
import {CardTitle, CardTitleWrapper} from "./style.ts";

type TitleProps = {
    title: string;
}

export const Title: FC<TitleProps> = ({title}) => (
    <CardTitleWrapper>
        <CardTitle>
            {title}
        </CardTitle>
    </CardTitleWrapper>
)