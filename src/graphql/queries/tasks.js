import { gql } from '@apollo/client'; 
export const GET_TASKS = gql`
query GetTasks($input: FilterTaskInput!) {
    tasks(input: $input) {
      assignee{
          avatar
          createdAt
          email
          fullName
          id
          type
          updatedAt
      }
      createdAt
      creator{
          avatar
          createdAt
          email
          fullName
          id
          type
          updatedAt    
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;

