import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';

import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    bold: {
      fontWeight: 'bold'
    },
  }));

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      '& > *': {
        padding: 0
      },
    },
    expandRow: {
      width: "30px"
    },
    bold: {
      fontWeight: 'bold',
    },
    column: {
      width: '25%',
      fontWeight: 'bold',
      padding: 0
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    },
    iconButton: {
      padding: 2,
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }));


interface ReleasesViewProps {
  site: API.CMS.Site,
  releases: API.CMS.Releases,
}

const ReleasesView: React.FC<ReleasesViewProps> = ({ site, releases }) => {
  const classes = useStyles();


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left" colSpan={2}>Tag </TableCell>
            <TableCell className={classes.bold} align="left">Created</TableCell>
            <TableCell className={classes.bold} align="left">Note</TableCell>
            <TableCell className={classes.bold} align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {releases.map((release, index) => (<Row site={site} release={release} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface RowProps {
  site: API.CMS.Site,
  release: API.CMS.Release,

}

const Row: React.FC<RowProps> = ({ site, release }) => {
  const classes = useRowStyles();

  return (
    <>
      <TableRow key={release.id} hover className={classes.row}>
        <TableCell className={classes.expandRow}></TableCell>
        <TableCell className={classes.tableCell} align="left">{release.name}</TableCell>
        <TableCell className={classes.tableCell} align="left">{release.created}</TableCell>
        <TableCell className={classes.tableCell} align="left">{release.note}</TableCell>
        <TableCell align="center">

          {release.name === "LATEST" ?
            <>
              <IconButton className={classes.iconButton}> <EditIcon /> </IconButton>
              <IconButton className={classes.iconButton}> <CheckCircleIcon /> </IconButton>
            </>
            : <IconButton className={classes.iconButton}><VisibilityIcon /> </IconButton>}

        </TableCell>
      </TableRow>
    </>
  )
}

export { ReleasesView }




