import React from 'react';
import { makeStyles, createStyles, Theme, Paper, InputLabel, TextField, IconButton, Collapse } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.info.light
    },
    bold: {
      fontWeight: 'bold',
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    },
    paper: {
      backgroundColor: theme.palette.info.light,
    },
    select: {
      marginRight: theme.spacing(1),
      padding: 0,
      minWidth: '30ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      marginRight: theme.spacing(1),
      minWidth: '20ch'
    },
    heading: {
      fontWeight: 'bold',
      padding: theme.spacing(1),
      textAlign: 'center',
    },
    iconButton: {
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }),
);




interface LocalesOverviewProps {
  site: API.CMS.Site;
}


const LocalesOverview: React.FC<LocalesOverviewProps> = ({ site }) => {
  const classes = useStyles();

  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);
  const articles: API.CMS.Article[] = Object.values(site.articles);
  const pages: API.CMS.Page[] = Object.values(site.pages);

  const isLocale = (locale: API.CMS.SiteLocale, article: API.CMS.Article): boolean => {
    const articlePages = pages
      .filter(p => p.locale === locale.value)
      .filter(p => p.article === article.id);
    return articlePages.length > 0;
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <TableRow>
          <TableCell className={classes.bold} align="left">Article</TableCell>
          {locales.map((locale, index) => <TableCell key={index} className={classes.bold} align="left">{locale.value}</TableCell>)}
        </TableRow>
        {articles.map((article, index) => (
          <TableRow key={index} hover>
            <TableCell className={classes.tableCell} align="left">{article.name}</TableCell>
            {locales.map((locale, index) => <TableCell key={index} className={classes.bold} align="left">{
              isLocale(locale, article) === true ? (<span>V</span>) : (<span></span>)
            }</TableCell>)}
          </TableRow>
        ))}
      </TableContainer>
    </div >

  );
}

export { LocalesOverview }

