import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { API } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
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
    bold: {
      fontWeight: 'bold'
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }));



interface WorkflowsViewProps {
  site: API.CMS.Site,
}

const WorkflowsView: React.FC<WorkflowsViewProps> = ({ site }) => {
  const classes = useStyles();

  const workflows = Object.values(site.workflows);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left">Technical Name</TableCell>
            <TableCell className={classes.bold} align="left">Article</TableCell>
            <TableCell className={classes.bold} align="left">Locale</TableCell>
            <TableCell className={classes.bold} align="left">Localised Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workflows.map((workflow, index) => (
            <TableRow hover key={index}>
              <TableCell className={classes.tableCell} align="left">{workflow.name}</TableCell>
              <TableCell className={classes.tableCell} align="left">{site.articles[workflow.article].name}</TableCell>
              <TableCell className={classes.tableCell} align="left">{workflow.locale}</TableCell>
              <TableCell className={classes.tableCell} align="left">{workflow.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { WorkflowsView }




