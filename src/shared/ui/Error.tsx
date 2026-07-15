import type {FC} from 'react'
import {Button} from "../../UI";

type ErrorProps = {
    title: string,
    description: string,
    onRetry?: () => void
}

export const Error: FC<ErrorProps> = ({title, description, onRetry}) => (
    <div>
        <p>{title}</p>
        <p>{description}</p>
        {onRetry && <Button onClick={onRetry}>Try again</Button>}
    </div>
)