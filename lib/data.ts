import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { UserType } from 'mongoose/users/schema';

const client = new ApolloClient({
    uri: 'http://localhost:3001/api/graphql',
    cache: new InMemoryCache(),
  });

export async function userById(id: string){
    const users = await client
      .query<UserType>({
        query: gql`
          query Query($id: String!) {
            userById(_id: $id) {
              _id
              name
              logs
            }
          }
        `,
        variables: { id },
      });
    return users.data.userById; // Corrected return statement
}
