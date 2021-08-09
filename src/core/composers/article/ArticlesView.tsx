import React from 'react';
import { makeStyles, Theme, createStyles, Collapse, Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FormattedMessage } from 'react-intl';

import { ArticleDeletePage, ArticleDelete, ArticleEdit } from '../article';
import { API, Ide } from '../../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    bold: {
      fontWeight: 'bold'
    },
    title: {
      margin: theme.spacing(1),
      color: theme.palette.primary.main
    },
  }));

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      '& > *': {
        borderBottom: 'unset',
        padding: 0
      },
    },
    bold: {
      fontWeight: 'bold',
      borderBottom: 'unset'
    },
    column: {
      width: '25%',
      fontWeight: 'bold',
      borderBottom: 'unset',
      padding: 0
    },
    expandRow: {
      width: "30px"
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

const ArticlesView: React.FC<{}> = () => {
  const classes = useStyles();
  const site = Ide.useSite();
  const articles = Object.values(site.articles).sort((a1, a2) => a1.body.order - a2.body.order);

  return (
    <>
      <Typography variant="h3" className={classes.title}><FormattedMessage id="articles" />: {articles.length}</Typography>
      <Typography variant="body1" className={classes.title}><FormattedMessage id="articles.message" /></Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.bold} align="left" colSpan={2}><FormattedMessage id="article.name" /></TableCell>
              <TableCell className={classes.bold} align="left"><FormattedMessage id="order" /></TableCell>
              <TableCell className={classes.bold} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((article, index) => (<Row key={index} article={article} site={site} />))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const Row: React.FC<{ article: API.CMS.Article, site: API.CMS.Site }> = ({ article, site }) => {
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);
  const parentName = article.body.parentId ? site.articles[article.body.parentId].body.name + "/" : "";

  const pages = Object.values(site.pages).filter(page => page.body.article === article.id);

  return (
    <>
      <TableRow key={article.id} hover className={classes.row}>
        <TableCell className={classes.expandRow}>
          <IconButton className={classes.iconButton} size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">{parentName}{article.body.name}</TableCell>
        <TableCell className={classes.tableCell} align="left">{article.body.order}</TableCell>
        <TableCell className={classes.tableCell} align="right">
          <ArticleEdit article={article} />
          <ArticleDelete article={article} />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.column} align="left" style={{ paddingRight: 0 }}><FormattedMessage id="pages" /></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pages.map((page, key) => (
                    <TableRow hover key={key} className={classes.row}>
                      <TableCell component="th" scope="row" align="left">{site.locales[page.body.locale].body.value}</TableCell>
                      <TableCell><ArticleDeletePage article={article} page={page} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export { ArticlesView }




