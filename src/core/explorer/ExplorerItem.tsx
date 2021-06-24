import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody, Paper, IconButton
} from '@material-ui/core';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import LinkIcon from '@material-ui/icons/Link';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { Layout } from '../deps';
import { API } from '../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    nameStyle: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
    },
    localeSummary: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
    localeStyle: {
      color: theme.palette.primary.dark
    },
    iconColor: {
      color: theme.palette.info.main,
    },
    link: {
      padding: 0,
      color: theme.palette.primary.dark
    },
    dividerColor: {
      background: theme.palette.primary.light,
    },
    hoverRow: {
      padding: 3,
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold'
      }
    },
    table: {
      borderBottom: 'none',
      paddingLeft: theme.spacing(2),
      paddingTop: 0,
      paddingBottom: 0,
      fontVariant: 'all-small-caps',
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }
  }),
);

interface ExplorerItemProps {
  article: API.CMS.Article,
  site: API.CMS.Site
}

const ExplorerItem: React.FC<ExplorerItemProps> = ({ article, site }) => {

  const layout = Layout.useContext();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    layout.actions.handleTabAdd({ id: article.id, label: article.name });
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleLinkClick = () => {
    layout.actions.handleTabAdd({ id: article.id, label: article.name });
  }
  
  const pages: API.CMS.Page[] = Object.values(site.pages).filter(page => article.id === page.article);

  return (
    <>
      <ListItem>

        <ListItemText
          primary={<Typography variant="body1" className={classes.nameStyle}>{article.name}</Typography>}
          secondary={<>
            <Typography component="span" variant="caption" className={classes.localeSummary}>
              {pages.map((page, index) => (<span className={classes.hoverRow} key={index}>{page.locale}&nbsp;</span>))}
            </Typography>
            <br />
            <Typography variant="caption">{"Last Modified: 10 days ago"}</Typography></>
          }
        />
        <IconButton>
          <LinkIcon className={classes.link} onClick={handleLinkClick} />
        </IconButton>
        {open ?
          <IconButton><ExpandLess className={classes.iconColor} onClick={handleClose} /></IconButton> :
          <IconButton><ExpandMore className={classes.iconColor} onClick={handleClick} /></IconButton>}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {pages.map((page, index) => (
                <TableRow key={index} className={clsx(classes.hoverRow)} >
                  <TableCell className={classes.table}>
                    {page.locale}
                  </TableCell>
                  <TableCell className={classes.table} align="right">{"22 Nov., 2021"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider className={classes.dividerColor} />
      </Collapse>
    </>
  );
}

export { ExplorerItem }





