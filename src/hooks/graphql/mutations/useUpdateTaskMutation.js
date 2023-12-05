import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "./../../../graphql/mutations/updateTask.js"
import useAppContext from "../../context/useAppContext.js";
import { GET_TASKS } from "../../../graphql/queries/tasks.js";
import { useEffect } from "react";


export const useUpdataTaskMutation = (property) => {
    const {setShowAlert, setMessageAlert, setTypeAlert, listsToUpdate, setListsToUpdate} = useAppContext()
    const [ updateTask, {loading, error, data} ] = useMutation(UPDATE_TASK,{
        onCompleted: (data) => {
            setShowAlert('showAlert')
            setTypeAlert('successAlert')
            setMessageAlert('Mutation completed, Updated task')
            setTimeout(()=>{
                setShowAlert('closeAlert')
            },3000)
        },
        onError: (error) => {
            setShowAlert('showAlert')
            setTypeAlert('errorAlert')
            setMessageAlert('Mutation incompleted, task not deleted')
            setTimeout(()=>{
                setShowAlert('closeAlert')
            },3000)
        },
        refetchQueries:[{
            query:GET_TASKS,
            variables:{
                input:{
                    status: listsToUpdate[0],
                },
            }
        },
        {
            query:GET_TASKS,
            variables:{
                input:{
                    status: listsToUpdate[1],
                },
            }
        }
    ]
    })
    const updateMutationsOptions = {loading, error, data};
    return { updateTask , updateMutationsOptions};
}