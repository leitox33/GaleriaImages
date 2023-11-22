import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
  images: [], 
 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        images: [...state.images, action.payload], 
      }
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
