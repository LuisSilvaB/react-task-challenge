import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext(); 

export const AppContextProvider = ({children}) => {
    const [typeDevice, setTypeDevice] = useState('desktop'); 
    const [messageError, setMessageError] = useState(); 
    const [users, setUsers] = useState(); 
    useEffect(()=>{
        const userAgent = window.navigator.userAgent.toLowerCase();
        (()=>{
            setDevice(userAgent)
            
        })()
    },[])
    const setDevice = (data) => {
        if (data.includes('android')) {
            setTypeDevice('android');
        } else if (data.includes('iphone')) {
            setTypeDevice('iphone');
        } else if (data.includes('windows') || data.includes('linux')) {
            setTypeDevice('desktop');
        } else {
            setMessageError('Device not found');
        }
    };

    

    return(
        <AppContext.Provider value={{typeDevice}}>
            {children}
        </AppContext.Provider>
    )
} 