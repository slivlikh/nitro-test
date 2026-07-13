import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {BrowserRouter} from "react-router";
import {BaseLayout} from "./app/layout/BaseLayout.tsx";
import 'normalize.css';
import './index.css';

const queryClient = new QueryClient()

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
    </QueryClientProvider>
)

