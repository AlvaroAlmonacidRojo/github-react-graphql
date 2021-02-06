export interface PageInfo {
  endCursor: string;
  startCursor: string;
}

export interface Repository {
  name: string;
  forkCount: number;
  stargazerCount: number;
}

export interface RepositoryEdge {
  node: Repository;
}

export interface Search {
  repositoryCount: number;
  pageInfo: PageInfo;
  edges: RepositoryEdge[];
}

export interface SearchReponse {
  search: Search;
}
