import styled from "styled-components";

export const ImageWrapper = styled.div`
    width: 250px;
    aspect-ratio: 1 / 1.2;
    position: relative;
    border: 1px solid gray;
    flex-shrink: 0;

    img {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
`

const lineClamp = ({lines}: { lines: number }) => `
  display: -webkit-box !important;
  overflow: hidden;
  -webkit-line-clamp: ${lines};
  line-clamp: ${lines};
  -webkit-box-orient: vertical;
  box-orient: vertical;
  word-break: normal;
  overflow-wrap: break-word;
`

export const CardTitleWrapper = styled.div`
    flex-grow: 1;
`

export const CardTitle = styled.h3`
    font-size: 25px;
    ${lineClamp({lines: 2})}
`

export const Price = styled.p`
    color: blue;
    font-size: 25px;
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    column-gap: 20px;
    margin-bottom: 20px;
    container-name: card;
    padding: 10px 15px;

    @media (max-width: 748px) {
        flex-direction: column;
        text-align: center;

        ${ImageWrapper} {
            margin: 0 auto;
        }
    }
`