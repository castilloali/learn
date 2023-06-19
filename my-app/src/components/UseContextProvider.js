import React, {createContext} from 'react'


const colorContext = createContext()

const UseContextProvider = ({children}) => {

  return (
    <colorContext.Provider value="red">
      {children}
    </colorContext.Provider>
  )
}

export { UseContextProvider, colorContext }