import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {BrowserRouter} from "react-router";
import {Router} from "./app/router";
import 'normalize.css';
import './index.css';

const queryClient = new QueryClient()

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </QueryClientProvider>
)

