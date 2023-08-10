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
