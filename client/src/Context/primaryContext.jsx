import {createContext, useState} from 'react'
export const primaryContext = createContext();

const PrimaryProvider = ({children}) => {
    const [camps, setCamps]= useState([]);
    const [states, setStates]= useState([])

    return (
        <primaryContext.Provider  value= {{
            camps,
            setCamps,
            states,
            setStates

        }}>



        {children}

        </primaryContext.Provider>
    )
}
export default PrimaryProvider