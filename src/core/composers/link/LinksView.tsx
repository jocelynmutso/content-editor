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

import { LinkRemovePage, LinkDelete, LinkComposer } from '../link';
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


interface LinksViewProps {
  site: API.CMS.Site,

}

const LinksView: React.FC<LinksViewProps> = ({ site }) => {
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
            <TableCell className={classes.bold} align="center">Articles</TableCell>
            <TableCell className={classes.bold} align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, index) => (<Row key={index} site={site} link={link} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface RowProps {
  site: API.CMS.Site,
  link: API.CMS.Link,

}

const Row: React.FC<RowProps> = ({ site, link }) => {
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow key={link.id} hover className={classes.row}>
        <TableCell className={classes.expandRow}>
          <IconButton className={classes.iconButton} size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">{link.type}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.locale}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.description}</TableCell>
        <TableCell className={classes.tableCell} align="left">{link.content}</TableCell>
        <TableCell className={classes.tableCell} align="center">{link.articles.length}</TableCell>
        <TableCell className={classes.tableCell} align="center"><LinkDelete link={link} site={site} /></TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.column} align="left" style={{ paddingRight: 0 }}>Articles</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {link.articles.map((id) => (
                    <TableRow hover key={id} className={classes.row}>
                      <TableCell component="th" scope="row" align="left">
                        {site.articles[id].name}
                      </TableCell>
                      <TableCell>
                        <LinkRemovePage link={link} site={site} />
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




