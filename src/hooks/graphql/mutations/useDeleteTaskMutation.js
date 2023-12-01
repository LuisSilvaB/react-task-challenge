import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "./../../../graphql/mutations/deleteTask.js"

export const useDeleteTaskMutation = () => {
    const [ deleteTask, {loading, error, data} ] = useMutation(DELETE_TASK,{
        onCompleted: (data) => {
            console.log("Mutation completed", data);
        },
        onError: (error) => {
            console.log("Mutation fail", error);
        }
    })
    return { deleteTask , loading, error, data};
}