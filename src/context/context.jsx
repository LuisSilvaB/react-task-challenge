import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserDataQuery } from "../hooks/graphql/queries/useGetUsersDataQuery";
import { useCreateTaskMutation } from "../hooks/graphql/mutations/useCreateTaskMutation";
export const AppContext = createContext(); 

export const AppContextProvider = ({children}) => {
    const [typeDevice, setTypeDevice] = useState('desktop'); 
    const [messageError, setMessageError] = useState(); 
    const [users, setUsers] = useState(); 
    const [task, setTask] = useState(); 

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

    const CreateTask = (task) => {
        const { createTask , loading, error, data } = useCreateTaskMutation(); 
        createTask(task); 
        return {loading, error, data}
    }
    const GetAllUsers = () => {
        const { data, error, loading } =  useGetUserDataQuery(); 
        return { data, error, loading }; 
    }

    return(
        <AppContext.Provider value={{typeDevice, task ,setTask, CreateTask, GetAllUsers}}>
            {children}
        </AppContext.Provider>
    )
} 