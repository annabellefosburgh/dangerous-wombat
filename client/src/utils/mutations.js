import { gql } from '@apollo/client';

export const CREATE_FLASHCARD = gql`
  mutation CreateFlashcard($title: String!, $content: String!) {
    createFlashcard(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export const UPDATE_FLASHCARD = gql`
  mutation UpdateFlashcard($id: ID!, $title: String, $content: String) {
    updateFlashcard(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export const DELETE_FLASHCARD = gql`
  mutation DeleteFlashcard($id: ID!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation AddProfile($username: String!, $email: String!) {
    addProfile(username: $username, email: $email) {
      id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        username
        password
        email
      }
    }
  }
`;
