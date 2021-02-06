import * as React from "react";
import { useQuery } from "react-apollo-hooks";
import { CircularProgress, Container, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { QUERY_REPOSITORY_LIST } from "./query";
import RepositoryList from "./RepositoryList";

/**
 * This RepositoryListContainer get the data from Github
 */
const RepositoryListContainer: React.FC = () => {
  const { data, error, loading } = useQuery(QUERY_REPOSITORY_LIST);

  if (loading)
    return <CircularProgress data-testId="loading" style={{ position: "absolute", top: "50%" }} />;
  if (error)
    return (
      <Snackbar
        open
        autoHideDuration={6000}
        color="red"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error.message}
        </MuiAlert>
      </Snackbar>
    );

  return (
    <Container>
      <RepositoryList data={data} />
    </Container>
  );
};

export default RepositoryListContainer;
