import { useQuery } from '@apollo/client'
import { GET_PROFILE } from '../../../graphql/queries/profile.js'

export const useGetUserDataQuery = () => {
    const { data , error, loading } = useQuery(GET_PROFILE)
    return { data, error, loading }
}