/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
    id
    email
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
    id
    email
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
    id
    email
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
export const onCreateConversation = `subscription OnCreateConversation($owner: String!) {
  onCreateConversation(owner: $owner) {
    id
    situation
    thought
    feeling
    evidence
    alternatives
    result
    user {
      id
      email
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
export const onUpdateConversation = `subscription OnUpdateConversation($owner: String!) {
  onUpdateConversation(owner: $owner) {
    id
    situation
    thought
    feeling
    evidence
    alternatives
    result
    user {
      id
      email
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
export const onDeleteConversation = `subscription OnDeleteConversation($owner: String!) {
  onDeleteConversation(owner: $owner) {
    id
    situation
    thought
    feeling
    evidence
    alternatives
    result
    user {
      id
      email
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
