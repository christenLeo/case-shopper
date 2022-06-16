import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../Global/GlobalContext";
import { ProductCard } from "../ProductCard/ProductCard.js";

export const ProductsSection = () => {
    const {getAllProducts, products, filterText} = useContext(GlobalContext);

    useEffect(() => {
        getAllProducts();
    }, [products]);

    const mountProducts = products.filter((product) => {
        if (product.name.toLowerCase() === filterText.toLowerCase()) {
            return product;
        }
        return product;
    }).map((product) => {
        return (
            <li key={product.id}>
                <ProductCard/>
            </li>
        );
    });

    return (
        <section>
            <ul>
                {mountProducts}
            </ul>
        </section>
    );
};