import { gql } from '@apollo/client'; 
export const GET_PROFILE = gql`
    query{
        profile {
            avatar
            email
            fullName
            id
            type
        }
    }
`