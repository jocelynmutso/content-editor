import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody, TableHead
} from '@material-ui/core';

import { LinkItem } from './LinkItem';
import { Layout } from '../deps';
import { API } from '../';
import { LinkEditor } from './LinkEditor';

const useStyles = (props: { y: number }) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `${props.y}px`
    },

    table: {
      padding: theme.spacing(1),
    },
    tableHead: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.secondary.dark
    },
    add: {
      margin: theme.spacing(2),
    }
  }),
)();


interface LinksProps {
  links: API.Links,
  site: API.Site
}

const Links: React.FC<LinksProps> = ({ links, site }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);
  
  const [edit, setEdit] = React.useState<API.Link | undefined>();

  return (<>
  <LinkEditor link={edit} handleClose={() => setEdit(undefined)}/>
    <TableContainer className={classes.table}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}> Type </TableCell>
            <TableCell className={classes.tableHead}> Value</TableCell>
            <TableCell className={classes.tableHead}> Description </TableCell>
            <TableCell className={classes.tableHead}> Path </TableCell>
            <TableCell className={classes.tableHead}> Locale </TableCell>
            <TableCell className={classes.tableHead} />
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((row, index) => (<LinkItem key={index} value={row} onEdit={() => setEdit(row)}/>))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}

export type { LinksProps }
export { Links }


