import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react"
import Popup from "reactjs-popup";
import { GlobalContext } from "../../Global/GlobalContext";
import { CreateProductForm } from "../CreateProductForm/CreateProductForm";
import { ProductCard } from "../ProductCard/ProductCard.js";

export const ProductsSection = () => {
    const {getAllProducts, products, filterText} = useContext(GlobalContext);

    useEffect(() => {
        getAllProducts();
    }, [products]);

    const mountProducts = products.filter((product) => {
        if (product.name.toLowerCase().includes(filterText.toLowerCase())) {
            return product;
        }
    }).map((product) => {
        return (
            <li key={product.id}>
                <ProductCard
                    productId={product.id} 
                    name={product.name} 
                    price={product.price} 
                    stock={product.qty_stock} 
                    image={product.img_url} 
                />
            </li>
        );
    });

    return (
        <section>
            <Popup position={"bottom left"} trigger={<Button variant="outlined">Insert new product</Button>}>
                {close => (
                    <CreateProductForm close={close}/>
                )}
            </Popup>
            <ul>
                {mountProducts}
            </ul>
        </section>
    );
};