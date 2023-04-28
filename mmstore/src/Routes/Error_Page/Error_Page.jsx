import React from 'react'

import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {

  const error = useRouteError();
  return (
    <>
      <h1>Error Page</h1>
       <p>{error.statusText || error.message}</p>
    </>
  )
}

expo