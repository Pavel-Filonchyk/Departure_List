import React from 'react'

export const ContextApp = React.createContext()

export const initialState = { 
    cells: [],
    text: [],
    pagesSize: 4,
    totalElems: 9,
}

export const reducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'LOADER':
        return {
            ...state,
            cells: action.payload
        }
        case 'LOADER_PAGES':
        return {
            ...state,
            cells: action.payload
        }
        case 'GET_TEXT':
        return {
            ...state,
            text: action.payload
        }
        case 'CLOSE_MODAL':
        return {
            ...state,
            text: []
        }
        
        case 'ON_TOP_ITEMS':
            const toItemsTop = state.cells.sort((a, b) =>{
                let nameA=a.city, nameB=b.city
                  if (nameA < nameB) 
                    return -1
                  if (nameA > nameB)
                    return 1
              
                })
        return {
            ...state,
            cells: [toItemsTop].flat()
        }
        case 'ON_BOTTOM_ITEMS':
            const toItemsBottom = state.cells.sort((a, b) =>{
                let nameA=a.city, nameB=b.city
                if (nameB < nameA) 
                  return -1
                if (nameB > nameA)
                  return 1
            
              })
        return {
            ...state,
            cells: [toItemsBottom].flat()
        }

        default: 
        return state;  
    }
}

  