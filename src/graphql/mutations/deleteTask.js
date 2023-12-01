import {gql} from '@apollo/client'
export const DELETE_TASK = gql`
    mutation DeleteTask($taskId: DeleteTaskInput!) {
        deleteTask(input: $taskId) {
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