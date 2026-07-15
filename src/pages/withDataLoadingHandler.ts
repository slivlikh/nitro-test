import {DataLoadingError} from '../widgets/errors'
import {Spinner} from "../UI";
import {withSuspenseHandler} from "../shared/HOCs/withSuspenseHandler.tsx";

export const withDataLoadingHandler = withSuspenseHandler(Spinner)(DataLoadingError);