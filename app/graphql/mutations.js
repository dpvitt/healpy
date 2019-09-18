/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    conversations {
      items {
        id
        situation
        thought
        feeling
        evidence
        alternatives
        result
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    conversations {
      items {
        id
        situation
        thought
        feeling
        evidence
        alternatives
        result
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    conversations {
      items {
        id
        situation
        thought
        feeling
        evidence
        alternatives
        result
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
    id
    situation
    thought
    feeling
    evidence
    alternatives
    result
    user {
      id
      name
      conversations {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
    id
    situation
    thought
    feeling
    evidence
    alternatives
    result
    user {
      id
      name
      conversations {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
    id
    situation
    thought
    feeling
    evidence
    alternatives
    result
    user {
      id
      name
      conversations {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
