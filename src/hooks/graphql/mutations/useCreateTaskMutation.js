import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "./../../../graphql/mutations/createTask.js"

export const useCreateTaskMutation = () => {
    const [ createTask, {loading, error, data} ] = useMutation(CREATE_TASK,{
        onCompleted: (data) => {
            console.log("Mutation completed", data);
        },
        onError: (error) => {
            console.log("Mutation fail", error);
        }
    })
    return { createTask , loading, error, data };
}