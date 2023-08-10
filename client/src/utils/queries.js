import { gql } from '@apollo/client';

export const GET_FLASHCARDS = gql`
  query GetFlashcards {
    flashcards {
      id
      title
      content
    }
  }
`;
