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
import { LinkRemove } from './LinkRemove';

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


interface LinksViewProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}

const LinksView: React.FC<LinksViewProps> = ({ site, article}) => {
  const classes = useStyles();

  const links = Object.values(site.links);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="center" colSpan={2}>Type</TableCell>
            <TableCell className={classes.bold} align="left">Locale</TableCell>
            <TableCell className={classes.bold} align="left">Description</TableCell>
            <TableCell className={classes.bold} align="left">URL / value</TableCell>
            <TableCell className={classes.bold} align="left">Articles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (<Row site={site} link={link} article={article} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const Row: React.FC<{ site: API.CMS.Site, link: API.CMS.Link , article: API.CMS.Article}> = ({ site, link, article }) => {
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow key={link.id} hover className={classes.row}>
        <TableCell>
          <IconButton className={classes.iconButton} size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">{link.type}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.locale}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.description}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.content}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.articles.length}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.column} align="right" style={{paddingRight: 0}}>Articles</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {link.articles.map((id) => (
                    <TableRow key={id} className={classes.row}>
                      <TableCell component="th" scope="row" align="right">
                        {site.articles[id].name}
                      </TableCell>
                      <TableCell>
                        <IconButton className={classes.iconButton}>
                        </IconButton>
                      </TableCell>
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

export { LinksView }




