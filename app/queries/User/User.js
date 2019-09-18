import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import { UserContext } from '../../providers/UserContextProvider';

const GET_USER = gql`
  query User($id: ID!) {
    getUser(id: $id) {
      id
      name
    }
  }
`;

export const UserQuery = ({ children }) => {
  const [user] = useContext(UserContext);
  const { id } = user;

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <Query query={GET_USER} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error! {error.message}</Text>;
        const { getUser } = data;
        return children({ user: getUser });
      }}
    </Query>
  );
};
