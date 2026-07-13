import {type Basket as BasketType, type BasketItem} from './shema';
import {produce} from "immer";
import type {BasketDBDriverInterface} from "./BasketDBDriverInterface.ts";


const MIN_QUANTITY = 1


export class BasketService {
    #basket: BasketDBDriverInterface;

    constructor(basketDBDriver: BasketDBDriverInterface) {
        this.#basket = basketDBDriver
    }

    #findIndexBasketItemById(basket: BasketType, productId: number): number {
        return basket.findIndex(({id}) => id === productId);
    }

    static #buildBasketItem(productId: BasketItem['id'], quantity: number): BasketItem {
        return {id: productId, quantity: quantity, addedDate: new Date().toISOString()};
    }


    async getBasket() {
        return await this.#basket.get();
    }


    async addItem(productId: BasketItem['id']) {
        const basket = await this.#basket.get()
        const itemInBasketIndex = this.#findIndexBasketItemById(basket, productId);

        if (itemInBasketIndex === -1) {
            await this.#basket.set([...basket, BasketService.#buildBasketItem(productId, 1)]);
            return await this.#basket.get();
        }

        const updatedBasket = produce(basket, draftBasket => {
            draftBasket[itemInBasketIndex].quantity += 1;
        });

        await this.#basket.set(updatedBasket);

        return await this.#basket.get();
    }

    async editQuantity(productId: BasketItem['id'], quantity: number) {
        if (!Number.isInteger(quantity)) {
            throw new Error('new quantity has to be an integer')
        }

        if (quantity < MIN_QUANTITY) {
            throw new Error('new quantity cannot be less than 1')
        }


        const basket = await this.#basket.get();
        const itemInBasketIndex = this.#findIndexBasketItemById(basket, productId);

        if (itemInBasketIndex === -1) {
            await this.#basket.set([...basket, BasketService.#buildBasketItem(productId, quantity)]);
            return await this.#basket.get();
        }

        const updatedBasket = produce(basket, draftBasket => {
            draftBasket[itemInBasketIndex].quantity = quantity;
        });

        await this.#basket.set(updatedBasket);


        return await this.#basket.get();
    }

    async removeItem(productId: BasketItem['id']) {
        const basket = await this.#basket.get();

        await this.#basket.set(basket.filter(({id}) => id !== productId));
        return await this.#basket.get();
    }
}