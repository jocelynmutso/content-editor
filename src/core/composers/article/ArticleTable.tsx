import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FormattedMessage } from 'react-intl';


import { API } from '../../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    iconButton: {
      padding: 2,
      marginLeft: theme.spacing(3),
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



interface ArticleTableProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}

const ArticleTable: React.FC<ArticleTableProps> = ({ site, article }) => {
  const classes = useStyles();

  const links: API.CMS.Link[] = Object.values(site.links).filter(link => link.body.articles.includes(article.id));


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left"><FormattedMessage id="article.composer.parent"/></TableCell>
            <TableCell className={classes.bold} align="left"><FormattedMessage id="order"/></TableCell>
            <TableCell className={classes.bold} align="left"><FormattedMessage id="article.name"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (
            <TableRow hover key={index}>
              <TableCell className={classes.tableCell} align="left">{article.body.parentId}</TableCell>
              <TableCell className={classes.tableCell} align="left">{article.body.order}</TableCell>
              <TableCell className={classes.tableCell} align="left">{article.body.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export { ArticleTable }




