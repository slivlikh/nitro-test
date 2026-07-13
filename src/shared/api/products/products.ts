import {type} from 'arktype'
import {client} from "../client.ts";
import {Products} from "./shema.ts";


export async function fetchProducts({signal}: { signal: AbortSignal }): Promise<Products> {
    const products = await client.get('/products', {signal});
    const result = Products(products.data);

    if (result instanceof type.errors) {
        throw result;
    }
    return result;
}