import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody, Paper, IconButton
} from '@material-ui/core';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

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
      "&:hover": {
        cursor: 'pointer',
        textDecoration: 'underline',
        textDecorationColor: theme.palette.secondary.light
      }
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
    modified: {
      color: theme.palette.text.primary
    },
    divider: {
      background: theme.palette.primary.dark,
      marginTop: 4,
    },
    hoverRow: {
      padding: 3,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
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

 const handleExpand = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleLinkClick = () => {
    layout.actions.handleTabAdd({ id: article.id, label: article.name });
  }

  const pages: API.CMS.Page[] = Object.values(site.pages).filter(page => article.id === page.article);
  const links: API.CMS.Link[] = Object.values(site.links).filter(link => article.id === link.article);
  const workflows: API.CMS.Workflow[] = Object.values(site.workflows).filter(workflow => article.id === workflow.article)

  return (
    <>
      <ListItem>
        <ListItemText
          primary={<Typography onClick={handleClick} variant="body1" className={classes.nameStyle}>{article.name}</Typography>}
          secondary={<>
            <Typography component="span" variant="caption" className={classes.localeSummary} onClick={handleLinkClick}>
              {pages.map((page, index) => (<span className={classes.hoverRow} key={index}>{page.locale}&nbsp;</span>))}
            </Typography>
            <br />
            <Typography className={classes.modified} variant="caption">{"Last Modified: 10 days ago"}</Typography></>
          }
        />
        {open ?
          <IconButton onClick={handleClose}><ExpandLess className={classes.iconColor} /></IconButton> :
          <IconButton onClick={handleExpand}><ExpandMore className={classes.iconColor} /></IconButton>}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <TableContainer>
          <Table size="small">
            <TableBody>
                <TableRow className={classes.hoverRow} >
                  <TableCell className={classes.table}>
                    Links: {links.length}
                  </TableCell>
                </TableRow>
                <TableRow className={classes.hoverRow}>
                  <TableCell className={classes.table}>
                    Workflows: {workflows.length}
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider className={classes.divider} />
      </Collapse>
    </>
  );
}

export { ExplorerItem }





