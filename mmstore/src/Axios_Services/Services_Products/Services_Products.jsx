import axios from 'axios';

export const ServicesProducts = () => {
    return axios.get('https://fakestoreapi.com/products')
}