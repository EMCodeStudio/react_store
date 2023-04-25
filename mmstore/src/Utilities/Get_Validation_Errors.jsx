
export const getValidationErrors = errorCode =>{

    const configMatcher = {
        ERR_NETWORK: 'ERROR EN LA CONEXION DE RED!',
        ERR_BAD_REQUEST: 'ERROR DE AUTENTICACION!'
    }
    
    return configMatcher[errorCode]
}