import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;

export const CreateUserMutation = ({ children }) => (
  <Mutation mutation={CREATE_USER}>
    {(mutation) =>
      children({
        createUser: (input) => mutation({ variables: { input } }),
      })
    }
  </Mutation>
);
