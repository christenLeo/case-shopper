import { Button, OutlinedInput } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../Global/GlobalContext";
import { StyledForm } from "./styled";

export const CreateProductForm = (props) => {
    const {createProduct} = useContext(GlobalContext);
    const { handleSubmit, register } = useForm();

    return (
        <StyledForm onSubmit={handleSubmit(data=>createProduct(data, props.close))}>
            <OutlinedInput type="text" {...register('name')} sx={{width: '250px', margin: '0.5rem'}} placeholder="Product name"/>
            <OutlinedInput type="text" {...register('price')} sx={{width: '250px', margin: '0.5rem'}} placeholder="Product price"/>
            <OutlinedInput type="text" {...register('qty_stock')} sx={{width: '250px', margin: '0.5rem'}} placeholder="Product stock"/>
            <OutlinedInput type="text" {...register('img_url')} sx={{width: '250px', margin: '0.5rem'}} placeholder="Product image url"/>

            <Button type="submit" variant="contained">Add product</Button>
        </StyledForm>
    );
};