import { gql } from '@apollo/client'; 
export const GET_ALL_USERS = gql`
    query{
        users {
            avatar
            email
            fullName
            id
            type
        }
    }
`