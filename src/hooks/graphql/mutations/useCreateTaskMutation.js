import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "./../../../graphql/mutations/createTask.js"
import { GET_TASKS } from "../../../graphql/queries/tasks.js";
import useAppContext from "../../context/useAppContext.js";

export const useCreateTaskMutation = (property) => {
    const {setShowAlert, setMessageAlert, setTypeAlert} = useAppContext()
    const [ createTask, loading, error, data ] = useMutation(CREATE_TASK,{
        onCompleted: (data) => {
            setShowAlert('showAlert')
            setTypeAlert('successAlert')
            setMessageAlert('Mutation completed, User created')
            setTimeout(()=>{
                setShowAlert('closeAlert')
            },3000)
        },
        onError: (error) => {
            setShowAlert('showAlert')
            setTypeAlert('errorAlert')
            setMessageAlert('Mutation incompleted, User not created')
            setTimeout(()=>{
                setShowAlert('closeAlert')
            },3000)
        },
        refetchQueries:[{
            query:GET_TASKS,
            variables:{
                input:{
                    status: property,
                }
            }
        }]
    })
    const createMutationOptions = {loading, error, data}; 
    return {createTask , createMutationOptions } ;
}