import { type LoaderFunction } from "react-router-dom";

import { Hero, FeaturedProducts } from "@/components";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
    const res = await customFetch<ProductsResponse>(url);
    return { ...res.data };
};

const Landing = () => {
    return (
        <>
            <Hero />
            <FeaturedProducts />
        </>
    );
};
export default Landing;
