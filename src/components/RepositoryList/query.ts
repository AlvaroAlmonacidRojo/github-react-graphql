import gql from "graphql-tag";

export const QUERY_REPOSITORY_LIST = gql`
  query repositoryList {
    search(query: "react", type: REPOSITORY, first: 20) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            name
            forkCount
            stargazerCount
          }
        }
      }
    }
  }
`;
