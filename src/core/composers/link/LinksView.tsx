import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { API } from '../../deps';

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



interface LinksViewProps {
  site: API.CMS.Site,
  
}

const LinksView: React.FC<LinksViewProps> = ({ site }) => {
  const classes = useStyles();
  
  const links = Object.values(site.links);

    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left">Type</TableCell>
            <TableCell className={classes.bold} align="left">Locale</TableCell>
            <TableCell className={classes.bold} align="left">Description</TableCell>
            <TableCell className={classes.bold} align="left">URL / value</TableCell>
            <TableCell className={classes.bold} align="left">Article</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (
            <TableRow key={index} hover>
              <TableCell className={classes.tableCell} align="left">{link.type}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.locale}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.description}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.content}</TableCell>
              <TableCell className={classes.tableCell} align="left">{site.articles[link.article].name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { LinksView }




