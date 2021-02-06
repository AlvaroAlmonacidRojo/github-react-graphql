import * as React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@material-ui/core";

import { RepositoryEdge, SearchReponse } from "../../types/types";

interface Props {
  data: SearchReponse;
}

/**
 * This RepositoryList display the repository list
 */
const RepositoryList: React.FC<Props> = ({ data }) => (
  <Box>
    <h2>React Repository List</h2>
    <h3>{`Total count: ${data.search.repositoryCount}`}</h3>
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell key="Name">Name</TableCell>
            <TableCell key="Stars">Stars 🌟</TableCell>
            <TableCell key="Forks">Forks 🍴</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.search.edges.map((edge: RepositoryEdge, key: number) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                <TableCell key={`Name-${edge.node.name}`}>
                  {edge.node.name}
                </TableCell>
                <TableCell key={`Star-${edge.node.stargazerCount}`}>
                  {edge.node.stargazerCount}
                </TableCell>
                <TableCell key={`Fork-${edge.node.forkCount}`}>
                  {edge.node.forkCount}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default RepositoryList;
