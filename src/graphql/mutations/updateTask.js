import {gql} from '@apollo/client'
export const UPDATE_TASK = gql`
    mutation UpdateTask($taskupdate: UpdateTaskInput!) {
        updateTask(input: $taskupdate) {
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