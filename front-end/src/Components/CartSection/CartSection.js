import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";

export const CartSection = () => {
    const {cart, totalValue} = useContext(GlobalContext);


    return (
        <section>
            <ul></ul>
            {totalValue != 0 ? <p>Total value: ${totalValue.toFixed(2)}</p> : <p>Total value: $0.00</p>}
        </section>
    );
};