/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      conversations {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($id: ID!) {
  getConversation(id: $id) {
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
export const listConversations = `query ListConversations(
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      owner
    }
    nextToken
  }
}
`;
