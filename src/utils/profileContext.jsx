import { createContext, useReducer } from "react";

let initialState = {
    profile: {},
}


let reducer = (state , action) => {
    if(action.type === 'sendDataUser'){
        return {...action.payload}
        
    }

}



export const ProfileContext = createContext();

export const ContextProviders = ({children}) =>{
    let state = useReducer(reducer, initialState);
    return (
        <ProfileContext.Provider value = {state} >{children}</ProfileContext.Provider>
    )
}

