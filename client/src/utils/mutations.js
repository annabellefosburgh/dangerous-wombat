import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
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
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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

export const UPDATE_SCORE = gql`
  mutation UpdateScore($email: String!, $previousScore: Int!) {
    updatePreviousScore(email: $email, previousScore: $previousScore) {
      _id
      username
      previousScore
    }
  }
`;