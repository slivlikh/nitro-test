import type {FC} from "react";
import {Error} from "../../shared/ui/Error.tsx";

type DataLoadingErrorProps = {
    onRetry: () => void;
}

export const DataLoadingError: FC<DataLoadingErrorProps> = ({ onRetry }) => <Error title='500' description="Ooops, something went wrong" onRetry={onRetry}/>