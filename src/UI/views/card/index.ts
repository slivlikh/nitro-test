import {Card as CardComponent} from "./Card.tsx";
import {Image} from "./Image.tsx";
import {Title} from "./Title.tsx";
import {Price} from "./style.ts";


export const Card = Object.assign(CardComponent, {Image, Title, Price});

