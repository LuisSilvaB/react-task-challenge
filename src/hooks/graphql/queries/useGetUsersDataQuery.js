import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../../graphql/queries/users.js'

export const useGetUserDataQuery = () => {
    const { data , error, loading } = useQuery(GET_ALL_USERS)
    return { data, error, loading }
}