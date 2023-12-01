import { useMutation } from "@apollo/client";
import { UPDATE_TASK } from "./../../../graphql/mutations/updateTask.js"

export const useUpdataTaskMutation = () => {
    const [ updateTask, {loading, error, data} ] = useMutation(UPDATE_TASK,{
        onCompleted: (data) => {
            console.log("Mutation completed", data);
        },
        onError: (error) => {
            console.log("Mutation fail", error);
        }
    })
    return { updateTask , loading, error, data};
}