
import axios from 'axios'

export const servicesCategories = () =>{
    return axios.get('https://fakestoreapi.com/products/categories')
}