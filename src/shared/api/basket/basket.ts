import {BasketLocalStorageAdapter} from "./BasketLocalStorageAdapter.ts";
import {BasketService} from "./BasketService.ts";
import type {BasketItem} from "./shema.ts";


const basketLocalStorageAdapter = new BasketLocalStorageAdapter();
const basketService = new BasketService(basketLocalStorageAdapter);

async function sleep(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

export async function fetchBasket({signal}: { signal: AbortSignal }) {
    await sleep(1000);
    const result = await basketService.getBasket();
    signal.throwIfAborted();
    return result;
}

export async function addToBasket(productId: BasketItem['id']) {
    await sleep(1000);
    return await basketService.addItem(productId);
}

export async function removeFromBasket(productId: BasketItem['id']) {
    await sleep(1000);
    return await basketService.removeItem(productId);
}

export async function editQuantity({productId, quantity}: {
    productId: BasketItem['id'],
    quantity: BasketItem['quantity']
}) {
    await sleep(1000);
    return await basketService.editQuantity(productId, quantity);
}