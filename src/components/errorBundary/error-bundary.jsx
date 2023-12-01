import React, { useState } from 'react'

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState({});
  const [hasError, setHasError] = useState(false) 
  const handleError = (error, info) =>{
    setError({error: error, errorInfo: info})
    setHasError(true); 
    console.log('Error: ', error.error , 'ErrorInfo: ', error.errorInfo);
  } 
  if (hasError) {
    return <h1>Something went wrong.</h1>
  }
  return (
    <React.ErrorBoundary onError = {handleError}>
        {children}
    </React.ErrorBoundary>
  )
}
export {ErrorBoundary}; 

