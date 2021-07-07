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

import { LinkRemove } from './LinkRemove';
import { LinkEdit } from './LinkEdit';


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



interface LinkTableProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}

const LinkTable: React.FC<LinkTableProps> = ({ site, article }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const links: API.CMS.Link[] = Object.values(site.links).filter(link => article.id === link.article);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold} align="left">Type</TableCell>
            <TableCell className={classes.bold} align="left">Locale</TableCell>
            <TableCell className={classes.bold} align="left">Description</TableCell>
            <TableCell className={classes.bold} align="left">Value</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (
            <TableRow hover key={index}>
              <TableCell className={classes.tableCell} align="left">{link.type}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.locale}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.description}</TableCell>
              <TableCell className={classes.tableCell} align="left">{link.content}</TableCell>
              <TableCell className={classes.tableCell} align="right"><LinkEdit site={site} article={article} link={link} /></TableCell>
              <TableCell className={classes.tableCell} align="right"><LinkRemove site={site} article={article} link={link} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export { LinkTable }




