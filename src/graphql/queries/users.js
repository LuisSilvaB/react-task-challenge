import { gql } from '@apollo/client'; 
export const GET_ALL_USERS = gql`
    query{
        users {
            avatar
            createdAt
            email
            fullName
            id
            type
            updatedAt
        }
    }
`