import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody
} from '@material-ui/core';

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


interface ReleaseItemProps {
  releases: API.Releases,
  site: API.Site
}

const ReleaseItem: React.FC<ReleaseItemProps> = ({ releases, site }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);

  return (<>
    <TableContainer>
      <Table size="small">
        <TableBody>
          {releases.map((row, index) => (
            <TableRow key={index} >
              <TableCell component="th" scope="row" className={classes.hover}>
                {row.name}
              </TableCell>
              
              <TableCell>
                {row.created}
              </TableCell>
              
              <TableCell>
                {row.note}
              </TableCell>
              
              <TableCell>
                {row.id}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}

export type { ReleaseItemProps }
export { ReleaseItem }


