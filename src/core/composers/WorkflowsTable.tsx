import React from 'react';
import { makeStyles, Typography, IconButton, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

import { API, Layout } from '../deps';

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



interface WorkflowsTableProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}

const WorkflowsTable: React.FC<WorkflowsTableProps> = ({ site, article }) => {
  const classes = useStyles();
  const workflows: API.CMS.Workflow[] = Object.values(site.workflows).filter(workflow => article.id === workflow.article);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left">Technical Name</TableCell>
            <TableCell className={classes.bold} align="left">Locale</TableCell>
            <TableCell className={classes.bold} align="left">Localised Name</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workflows.map((workflow, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell} align="left">{workflow.name}</TableCell>
              <TableCell className={classes.tableCell} align="left">{workflow.locale}</TableCell>
              <TableCell className={classes.tableCell} align="left">{workflow.content}</TableCell>
              <TableCell className={classes.tableCell} align="right"><IconButton className={classes.iconButton}>
                <EditIcon />
              </IconButton>
                <IconButton className={classes.iconButton}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { WorkflowsTable }




