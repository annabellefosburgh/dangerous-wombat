import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($username: String!, $email: String!) {
    addProfile(username: $username, email: $email) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;
