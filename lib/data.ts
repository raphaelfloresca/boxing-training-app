import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://app-dev.boxing-training-app.orb.local/api/graphql',
    cache: new InMemoryCache(),
  });

export async function userMany() {
    const users = client
      .query({
        query: gql`
          query ExampleQuery {
            userMany {
              _id
              name
              logs
            }
          }
        `})
        return users;
}

export async function userById(id: string) {
    const users = client
      .query({
        query: gql`
          query Query($id: String!) {
                      userById(_id: $id) {
                        _id
                        name
                        logs
                      }
                    }
        `})
        return users;
}