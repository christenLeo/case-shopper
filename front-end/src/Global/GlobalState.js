import { useState } from 'react';
import { useRequest } from '../hooks/useRequest.js';
import { GlobalContext } from './GlobalContext.js';
import { BASE_URL } from '../constants/urls.js';

export const GlobalState = (props) => {
    const {makeRequest, isLoading} = useRequest();
    const [products, setProducts] = useState([]);
    const [clients, setClients] = useState([]);
    const [orders, setOrders] = useState([]);
    const [filterText, setFilterText] = useState('');

    // Products 
    const getAllProducts = async () => {
        const result = await makeRequest('get', `${BASE_URL}products`);
        setProducts(result);
    };

    // Clients
    const getAllClients = async () => {
        const result = await makeRequest('get', `${BASE_URL}clients`);
        setClients(result);
    };

    // Orders
    const getAllOrders = async () => {
        const result = await makeRequest('get', `${BASE_URL}orders`);
        setOrders(result)
    };

    // Filters
    const changeFilterText = (evt) => {
        setFilterText(evt.target.value);
    };

    const value = {
        isLoading,
        getAllProducts, 
        getAllClients, 
        getAllOrders, 
        products,
        clients,
        orders,
        changeFilterText,
        filterText
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
};