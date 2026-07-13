import type {FC} from 'react'
import {Error} from "../../shared/components/Error.tsx";

type ChunkLoadingErrorProps = {
    onRetry: () => void;
}

export const ChunkLoadingError: FC<ChunkLoadingErrorProps> = ({onRetry}) =>
    <Error
        title='500'
        description="Ooops, culd not load the chunk"
        onRetry={onRetry}
    />