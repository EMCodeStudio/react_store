export const getValidationError = errorCode => {
    const configCodeMatcher = {
      ERR_NETWORK: "ERROR DE CONEXION A LA RED!",
      ERR_BAD_REQUEST: "ERROR DE AUTENTICACION!"
    }
    return configCodeMatcher[errorCode]
  }