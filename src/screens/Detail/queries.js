
import { gql } from "@apollo/client";

export const GET_QUESTIONS_DETAIL = gql`
  query DetailQuery($id: Int!=8) {
    questions_by_pk(id: $id) {
      id
      text
      options {
        id
        text
      }
     
    }
  }
`;

export const NEW_ANSWER_MUTATION = gql`
  mutation NewAnswer($option_id: Int!, $user_id: String!, $question_id: Int!) {
    insert_answers_one(
      object: {
        option_id: $option_id
        user_id: $user_id
        question_id: $question_id
      }
    ) {
      id
    }
  }
`;

export const RESULTS_SUBSCRIPTION = gql`
  subscription MySubscription($id: Int!) {
    questions_by_pk(id: $id) {
      options {
        id
        text
        answers_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
