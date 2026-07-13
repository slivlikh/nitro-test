import type {FC} from 'react'
import {ImageWrapper} from "./style.ts";

type ImageProps = {
    src: string;
    alt: string;
}

export const Image: FC<ImageProps> = ({src, alt}) => {
    return (
        <ImageWrapper>
            <img src={src} alt={alt}/>
        </ImageWrapper>
    )
}