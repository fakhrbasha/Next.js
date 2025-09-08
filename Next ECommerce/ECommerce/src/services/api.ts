import { AddToCartResponse, GetUserCartResponse } from "@/interfaces";
import { ProductsResponse, SingleProductResponse } from "@/types";
class ApiServices {
    #baseURL = 'https://ecommerce.routemisr.com';
    async getAllProducts(): Promise<ProductsResponse> {
        return await fetch(this.#baseURL + '/api/v1/products', {
            next: {
                revalidate: 60, // ISR Caching
            },
            cache: 'no-cache', // get data from cache if not modified
        }).then((res) => res.json());
    }
    async getSingleProduct(
        id: string | string[]
    ): Promise<SingleProductResponse> {
        return await fetch(this.#baseURL + `/api/v1/products/${id}`).then((res) =>
            res.json()
        );
    }

    #getHeader() {
        return {
            'Content-Type': 'application/json', // must
            token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmIxZjE5Y2E0NWFiOWY5MWFkZGU4YSIsIm5hbWUiOiJmYWtociIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU3MDkzNjc4LCJleHAiOjE3NjQ4Njk2Nzh9.PozujMs1bg2DFPeb_OT_-31D1mtmqCpWWBFfFd88mf4',
        };
    }
    async addProductToCart(id: String): Promise<AddToCartResponse> {
        return await fetch(this.#baseURL + '/api/v1/cart', {
            method: 'POST',
            body: JSON.stringify({
                // must json stringify
                productId: id,
            }),
            headers: this.#getHeader(),
        }).then((res) => res.json());
    }

    async getUserCart(): Promise<GetUserCartResponse> {
        return await fetch(this.#baseURL + '/api/v1/cart', {
            headers: this.#getHeader(),
        }).then((res) => res.json());
    }
    async removeSpecificItem(id: string | string[]): Promise<any> {
        return await fetch(this.#baseURL + `/api/v1/cart/${id}`, {
            method: 'DELETE',
            headers: this.#getHeader(),
        }).then((res) => res.json());
    }
}
// first take instance of the class

export const apiServices = new ApiServices();