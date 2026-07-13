import type {FC, PropsWithChildren} from 'react'
import {CardWrapper} from "./style.ts";


export const Card: FC<PropsWithChildren> = ({children}) => {
    return <CardWrapper>{children}</CardWrapper>
}


