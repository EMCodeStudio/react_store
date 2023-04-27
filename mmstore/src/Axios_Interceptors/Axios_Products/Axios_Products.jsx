import axios from 'axios';
import { getValidationError } from '../../Utils/Errors/Get_Validation_Errors'; 



export const axiosProducts = () => {

    const updateHeaders = request => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY3NzI0OTk2MSwiZXhwIjoxNjc3MjUzNTYxfQ.GywIbKZuGPl64szhuky3tdPtwn65IIhxvwfX8uUBrLs"
        const newHeader = {
            Authorization: token,
            "Content-Type": "Application/json"
        }
        request.headers = newHeader
        return request
    }
    axios.interceptors.request.use((request) => {
        if (request.url?.includes("assets"))
        return request
        console.log('REQUEST AXIOS: ' + request)
        return updateHeaders(request)
       
    });

    axios.interceptors.response.use((response) => {
        console.log('RESPONSE AXIOS: ' + response)
        return response
    },
        (error) => {
           console.log('ERROR AXIOS: ', getValidationError(error.code))
            return Promise.reject(error)
        }
    )
} 