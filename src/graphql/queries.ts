import { gql } from "@apollo/client";

export const LIST_CARDS = gql`
  query ListCards(
    $page: Int!
    $pageSize: Int!
    $search: String
    $place: String
    $priority: String
  ) {
    cards: listCards(
      page: $page
      pageSize: $pageSize
      search: $search
      place: $place
      priority: $priority
    ) {
      title
      description
      priority
      deadline
      place
      attachments
      stage {
        title
      }
    }
  }
`;
