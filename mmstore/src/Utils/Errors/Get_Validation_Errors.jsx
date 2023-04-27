export const getValidationError = errorCode => {
    const configCodeMatcher = {
      ERR_NETWORK: "Error en la Red!",
      ERR_BAD_REQUEST: "Error de Login!"
    }
    return configCodeMatcher[errorCode]
  }