import { gql } from '@apollo/client';

// Fetch all flashcards
export const GET_FLASHCARDS = gql`
  query GetFlashcards {
    flashcards {
      id
      title
      content
    }
  }
`;

// Fetch a single flashcard by id
export const GET_FLASHCARD_BY_ID = gql`
  query GetFlashcardById($id: ID!) {
    flashcard(id: $id) {
      id
      title
      content
    }
  }
`;