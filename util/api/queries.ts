import { gql } from "@apollo/client";

export const getFeedbacks = gql`
  query Feedbacks {
    feedbacks {
      title
      detail
      upvotes {
        upvoter {
          id
        }
      }
      comments {
        _count {
          comments
        }
      }
    }
  }
`;
