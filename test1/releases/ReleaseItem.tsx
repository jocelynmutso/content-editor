import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody
} from '@material-ui/core';

import { Layout } from '../deps';
import { API } from '../';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    hover: {
      "&:hover": {
        backgroundColor: theme.palette.info.light,
        color: 'white',
        fontWeight: 'bold'
      }
    },
    viewButton: {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
      "&:hover": {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.info.main,
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }
  }),
);


interface ReleaseItemProps {
  value: API.Release,
}

const ReleaseItem: React.FC<ReleaseItemProps> = ({ value }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);
  
  return (<>
    <TableRow className={classes.hover}>
      <TableCell>{value.name}</TableCell>
      <TableCell>{value.created}</TableCell>
      <TableCell>{value.note}</TableCell>
      <TableCell align="center" className={classes.viewButton}>
        {value.name === "LATEST" ? "EDIT | PUBLISH" : "VIEW"}
      </TableCell>
    </TableRow>
  </>
  )
}

export type { ReleaseItemProps }
export { ReleaseItem }


