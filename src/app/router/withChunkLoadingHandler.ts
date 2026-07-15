import {ChunkLoadingError} from "../../widgets/errors";
import {Spinner} from "../../UI";
import {withSuspenseHandler} from "../../shared/HOCs/withSuspenseHandler.tsx";

export const withChunkLoadingHandler = withSuspenseHandler(Spinner)(ChunkLoadingError);