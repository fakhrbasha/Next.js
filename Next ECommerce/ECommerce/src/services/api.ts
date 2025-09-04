import { ProductsResponse, SingleProductResponse } from "@/types";
import { promises } from "dns";
class ApiServices {
    baseURL = 'https://ecommerce.routemisr.com'
    async getAllProducts(): Promise<ProductsResponse> {
        return await fetch(
            this.baseURL + '/api/v1/products'
        ).then((res) => res.json());
    }
    async getSingleProduct(id: string | string[]): Promise<SingleProductResponse> {
        return await fetch(
            this.baseURL + `/api/v1/products/${id}`
        ).then((res) => res.json());
    }


}
// first take instance of the class

export const apiServices = new ApiServices();