import axios from "axios";
import { useState } from "react";

export const useRequest = () => {
    const [isLoading, setisLoading] = useState(false);

    const makeRequest = async (method, url, body, headers) => {
        try {
           setisLoading(true);
           const response = await axios[`${method}`](url, body, headers);
           setisLoading(false);
           return response.data; 
        } 
        catch (error) {
            setisLoading(false);
            return error.response.data;
        }
    };

    return {makeRequest, isLoading};
};