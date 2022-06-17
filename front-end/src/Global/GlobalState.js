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
    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    // Products 
    const getAllProducts = async () => {
        const result = await makeRequest('get', `${BASE_URL}products`);
        setProducts(result);
    };

    const createProduct = async (data, close) => {
        const {name, price, qty_stock, img_url} = data;
        const product = {
            name,
            price: Number(price),
            qty_stock: Number(qty_stock),
            img_url
        };

        const res = await makeRequest('post', `${BASE_URL}products`, product);

        console.log(res);

        close();
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

    // Cart
    const updateTotalValue = () => {
        let newTotalValue = totalValue;
        cart.forEach((item)=>{
            newTotalValue += Number(item.price);
        });
        setTotalValue(newTotalValue);
    };

    const addToCart = (productId) => {
        const productInCart = cart.find(item=> item.id === productId)

        if (productInCart) {
            const newCart = cart.map((item)=>{
                if (productId === item.id) {
                    return {
                        ...item,
                        product_qty: item.product_qty + 1,
                        total_value: (Number(item.price) * Number(item.product_qty+1))
                    };
                }
                return item;
            });
            setCart(newCart);
        }
        else {
            const newProduct = products.find(item=>productId===item.id);
            const newCart = [
                ...cart,
                {
                    ...newProduct, 
                    product_qty: 1, 
                    total_value: Number(newProduct.price)
                }
            ];
            setCart(newCart);
        }
        updateTotalValue();
    };

    const removeFromCart = (productId) => {
        const newCart = cart.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              product_qty: item.product_qty - 1,
              total_value: (Number(item.price) * Number(item.product_qty)).toFixed(2)
            };
          }
          return item;
        }).filter((item) => item.product_qty > 0);
        setCart(newCart);
    };

    const value = {
        isLoading,
        getAllProducts,
        createProduct, 
        getAllClients, 
        getAllOrders, 
        products,
        clients,
        orders,
        changeFilterText,
        filterText,
        addToCart,
        removeFromCart,
        cart,
        totalValue
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
    }
