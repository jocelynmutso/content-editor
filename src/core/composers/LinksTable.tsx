import React from 'react';
import { makeStyles, Typography, IconButton, Theme, createStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
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
  }));



interface LinksTableProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}

const LinksTable: React.FC<LinksTableProps> = ({ site, article }) => {
  const classes = useStyles();
  const links: API.CMS.Link[] = Object.values(site.links).filter(link => article.id === link.article);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Locale</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Value</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (
            <TableRow key={index}>
              <TableCell align="left">{link.type}</TableCell>
              <TableCell align="left">{link.locale}</TableCell>
              <TableCell align="left">{link.description}</TableCell>
              <TableCell align="left">{link.content}</TableCell>
              <TableCell align="right"><IconButton className={classes.iconButton}><EditIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { LinksTable }




