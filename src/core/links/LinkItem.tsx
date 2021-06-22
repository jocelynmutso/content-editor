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


interface LinkItemProps {
  value: API.Link,
  onEdit:() => void,
}

const LinkItem: React.FC<LinkItemProps> = ({ value, onEdit }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);

  return (<>
    <TableRow className={classes.hover}>
      <TableCell>{value.type}</TableCell>
      <TableCell>{value.value}</TableCell>
      <TableCell>{value.description}</TableCell>
      <TableCell>{value.path}</TableCell>
      <TableCell>{value.locale}</TableCell>
      <TableCell onClick={onEdit}>
        <Button color="primary" className={classes.viewButton}>Edit</Button>
      </TableCell>
    </TableRow>
  </>
  )
}

export type { LinkItemProps }
export { LinkItem }


