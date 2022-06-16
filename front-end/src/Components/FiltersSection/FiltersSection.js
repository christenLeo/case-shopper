import { Search } from "@mui/icons-material";
import { InputAdornment, OutlinedInput } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";

export const FiltersSection = () => {
    const {changeFilterText} = useContext(GlobalContext);

    return (
        <section>
            <OutlinedInput onChange={changeFilterText} placeholder="Filter" endAdornment={<InputAdornment position="end"><Search/></InputAdornment>}/>
        </section>
    )
};