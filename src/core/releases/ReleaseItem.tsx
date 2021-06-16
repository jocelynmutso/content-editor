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

 // { releases.map((row, index) => (<TableCell>{row.name}</TableCell>)) }
  //{path.markdowns.map((id, index) => (<span className={classes.hover} key={index}>{site.markdowns[id].locale}&nbsp;</span>))}

  return (<>
    <TableContainer>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" className={classes.hover}>
              {releases.map((row, index) => (<TableCell>{row.name}</TableCell>))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}

export type { ReleaseItemProps }
export { ReleaseItem }


