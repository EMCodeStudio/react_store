
import axios from 'axios'
import { getValidationErrors } from '../../Components/Utilities/Get_Validation_Errors'

const updateHeader = request => {
    const token = ''
    const newHeader = {
        Authorization: token,
        'Content-Type': 'Application/Json'
    }
    request.headers = newHeader
    return request
}

// Add a request interceptor
axios.interceptors.request.use((request) => {
    // Do something before request is sent
    if (request.url?.includes('assets'))
    return request
    console.log('RESPUESTA REQUEST: ' + request)
    return updateHeader(request)
}, (error) => {
    // Do something with request error
    console.log('ERROR REQUEST:', getValidationErrors(error.code))
    return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('RESPUESTA RESPONSE: ' + response)
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('ERROR RESPONSE: ', getValidationErrors(error.code))
    return Promise.reject(error);
});