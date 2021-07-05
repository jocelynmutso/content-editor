import React from 'react';
import { makeStyles, IconButton, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
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
      fontWeight: 'bold',
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }));



interface ArticlesTableProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}

const ArticlesTable: React.FC<ArticlesTableProps> = ({ site, article }) => {
  const classes = useStyles();
  const links: API.CMS.Link[] = Object.values(site.links).filter(link => article.id === link.article);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left">Parent</TableCell>
            <TableCell className={classes.bold} align="left">Order</TableCell>
            <TableCell className={classes.bold} align="left">Technical name</TableCell>
            <TableCell className={classes.bold} align="left">Localised name</TableCell>
            <TableCell className={classes.bold} align="left">Page Locale</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (
            <TableRow key={index} hover>
              <TableCell className={classes.tableCell} align="left">{article.parentId}</TableCell>
              <TableCell className={classes.tableCell} align="left">{article.order}</TableCell>
              <TableCell className={classes.tableCell} align="left">{article.name}</TableCell>
              <TableCell className={classes.tableCell} align="left">{article.parentId}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.content}</TableCell>
              <TableCell className={classes.tableCell} align="right"><IconButton className={classes.iconButton}><EditIcon /></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { ArticlesTable }




