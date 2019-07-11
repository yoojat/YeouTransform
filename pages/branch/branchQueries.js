import { gql } from "apollo-boost";

export const BRANCHES_QUERY = gql`
  {
    branches {
      id
      name
    }
  }
`;

export const BRANCH_QUERY = gql`
  query branch($id: ID!) {
    branch(where: { id: $id }) {
      id
      name
      address
      description
      kakao
      mainImg
      imgs
      lat
      lng
    }
  }
`;
