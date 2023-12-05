import { createContext, useContext, useEffect, useState } from "react";
import { useGetUserDataQuery } from "../hooks/graphql/queries/useGetUsersDataQuery";
import { useCreateTaskMutation } from "../hooks/graphql/mutations/useCreateTaskMutation";
export const AppContext = createContext(); 

export const AppContextProvider = ({children}) => {
    const [typeDevice, setTypeDevice] = useState('desktop'); 
    const [typeForm, setTypeForm] = useState(''); 
    const [typeGlobalOptions, setTypeGlobalOptions] = useState('')
    const [isVisible, setIsVisible] = useState(false);
    const [showAlert, setShowAlert] = useState("closeAlert")
    const [messageAlert, setMessageAlert] = useState(""); 
    const [typeAlert, setTypeAlert] = useState(""); 
    const [users, setUsers] = useState(); 
    const [listsToUpdate, setListsToUpdate] = useState([]); 
    const [userData, setUserData] = useState({
        avatar:'', 
        name:''
    }); 
    const [taskContext, setTaskContext] = useState({
        name: "",
        dueDate: "",
        assigneeId: "",
        pointEstimate: "",
        status: "BACKLOG",
        tags: []
    }); 
    const [infoFormTask, setInfoFormtask] = useState({
        dueDate: "",
        assigneeId: "",
        pointEstimate: "",
        tags: [],
        img:"",
        name:"", 
    })


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
            messageAlert('Device not found');
        }
    };

    const clearStates = () => {
        setTaskContext({
            name: "",
            dueDate: "",
            assigneeId: "",
            pointEstimate: "",
            status: "BACKLOG",
            tags: []
        }); 
        setInfoFormtask({
            dueDate: "",
            assigneeId: "",
            pointEstimate: "",
            tags: [],
            img:"",
            name:""
        })
    }

    return(
        <AppContext.Provider value={{
            typeDevice, 
            setTypeDevice, 
            taskContext,
            setTaskContext,
            clearStates, 
            typeForm, 
            setTypeForm, 
            isVisible, 
            setIsVisible, 
            users, 
            setUsers, 
            infoFormTask, 
            setInfoFormtask, 
            typeGlobalOptions, 
            setTypeGlobalOptions,
            showAlert,
            setShowAlert,
            messageAlert,
            setMessageAlert,
            typeAlert,
            setTypeAlert,
            listsToUpdate,
            setListsToUpdate
            }}> 
            {children}
        </AppContext.Provider>
    )
} 