import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody
} from '@material-ui/core';

import { ReleaseItem } from './ReleaseItem';
import { Layout } from '../deps';
import { API } from '../';

const useStyles = (props: { y: number }) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `${props.y}px`
    },
    hover: {
      padding: 3,
      marginBottom: 3,
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold'
      }
    },
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
    <TableContainer>
      <Table size="small">
        <TableBody>
          {releases.map((row, index) => (
            <ReleaseItem key={index} site={site} releases={releases} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}
 
export type { ReleasesProps }
export { Releases }


