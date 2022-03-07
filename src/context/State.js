// user reducer to add and  remove items from the list

import { createContext, useReducer } from "react"
import ItemsReducer from './ItemsReducer'

const initialState = {
  items: [],
}

export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(ItemsReducer, initialState)

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  function removeItem(item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    })
  }

  const context = {
    items: state.items,
    addItem,
    removeItem
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  )
}