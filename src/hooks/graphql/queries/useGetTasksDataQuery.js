import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../../../graphql/queries/tasks.js'

export const useGetTasksDataQuery = ( input ) => {
    const { data , error, loading } = useQuery(GET_TASKS,{
        variables:{
            input
        }
    })
    return { data, error, loading }
}