import {gql} from '@apollo/client'
export const CREATE_TASK = gql`
    mutation CreateNewTask($task: CreateTaskInput!) {
    createTask(input: $task) {
        id
        name
        createdAt
        dueDate
        assignee {
            id
            fullName
            email
            createdAt
            updatedAt
        }
        creator {
            id
            fullName
            email
            createdAt
            updatedAt
        }
        pointEstimate
        position
        status
        tags
    }
    }

`