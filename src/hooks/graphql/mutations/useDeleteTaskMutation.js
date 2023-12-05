import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "./../../../graphql/mutations/deleteTask.js"
import { GET_TASKS } from "../../../graphql/queries/tasks.js";
import useAppContext from "../../context/useAppContext.js";

export const useDeleteTaskMutation = () => {
    const {setShowAlert, setMessageAlert, setTypeAlert} = useAppContext()
    const [ deleteTask, {loading, error, data} ] = useMutation(DELETE_TASK,{
        onCompleted: (data) => {
            setShowAlert('showAlert')
            setTypeAlert('successAlert')
            setMessageAlert('Mutation completed, Deleted task')
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
                    status:'BACKLOG',
                }
            }
        }]
    })
    const deleteMutationsOptions = {loading, error, data}
    return { deleteTask , deleteMutationsOptions };
}