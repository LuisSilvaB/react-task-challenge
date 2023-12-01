import React, {useContext} from 'react'
import { AppContext } from '../../context/context'
export default function useAppContext() {
    let contextParams = useContext(AppContext); 
    return contextParams;  
}
