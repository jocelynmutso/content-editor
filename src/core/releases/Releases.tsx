import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody, TableHead
} from '@material-ui/core';

import { ReleaseItem } from './ReleaseItem';
import { Layout } from '../deps';
import { API } from '../';

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
    }
  }),
)();


interface ReleasesProps {
  releases: API.Releases,
  site: API.Site
}

const Releases: React.FC<ReleasesProps> = ({ releases, site }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);

  return (<>
    <TableContainer className={classes.table}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}> Name</TableCell>
            <TableCell className={classes.tableHead}> Created</TableCell>
            <TableCell className={classes.tableHead}> Note</TableCell>
            <TableCell align="center" className={classes.tableHead}> Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {releases.map((row, index) => (<ReleaseItem key={index} value={row} />))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}

export type { ReleasesProps }
export { Releases }


