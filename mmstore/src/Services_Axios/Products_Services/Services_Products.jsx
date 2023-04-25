
import axios from 'axios'

export const servicesProduct = () =>{
    return axios.get('https://fakestoreapi.com/products')
}