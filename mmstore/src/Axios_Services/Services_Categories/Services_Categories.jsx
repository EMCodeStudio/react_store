
import axios from 'axios'

export const servicesCategories = () =>{
    return axios.get('http://fakestoreapi.com/products/categories')
}