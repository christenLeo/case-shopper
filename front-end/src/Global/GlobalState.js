import { useState } from 'react';
import { useRequest } from '../hooks/useRequest.js';
import { GlobalContext } from './GlobalContext.js';
import { BASE_URL } from '../constants/urls.js';

export const GlobalState = (props) => {
    const {makeRequest, isLoading} = useRequest();
    const [products, setProducts] = useState();
    const [clients, setClients] = useState();
    const [orders, setOrders] = useState();

    // Products 
    const getAllProducts = async () => {
        const result = await makeRequest(`${BASE_URL}products`);
        setProducts(result);
    };

    // Clients
    const getAllClients = () => {
        const result = await makeRequest(`${BASE_URL}clients`);
        setClients(result);
    };

    // Orders
    const getAllOrders = () => {
        const result = await makeRequest(`${BASE_URL}orders`);
        setOrders(result)
    };

    const value = {
        isLoading,
        getAllProducts, 
        getAllClients, 
        getAllOrders, 
        products,
        clients,
        orders
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
};