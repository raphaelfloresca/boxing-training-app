import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { UserType } from 'mongoose/users/schema';

const client = new ApolloClient({
  uri: 'http://localhost:3001/api/graphql',
  cache: new InMemoryCache(),
});

export async function userById(id: string) {
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
  return users.data.userById;
}

export async function updateByIdusersInput(id: string, name: string) {
  const response = await client.mutate({
    mutation: gql`
      mutation Mutation($id: String!, $record: UpdateByIdusersInput!) {
        userUpdateById(_id: $id, record: $record) {
          record {
            _id
            name
          }
        }
      }
    `,
    variables: {
      id,
      record: {
        name,
      },
    },
  });
  return response.data.userUpdateById.record;
}
