
import axios from 'axios';

export const servicesProducts = () => {
    return axios.get('https://fakestoreapi.com/products')
}