import React from "react";
import { FiltersSection } from "../../Components/FiltersSection/FiltersSection.js";
import { ProductsSection } from "../../Components/ProductsSection/ProductsSection.js"

export const HomePage = () => {
    return (
        <>
            <h1>Aqui começa tudo</h1>
            <FiltersSection/>
            <ProductsSection/>
        </>
    );
};