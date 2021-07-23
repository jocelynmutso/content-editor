import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, TableContainer, Table, TableRow, TableCell, TableBody, IconButton
} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { DeleteRename } from './DeleteRename';

import { API, Ide } from '../deps';


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
        color: theme.palette.text.primary
      }
    },
    summary: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
    localeSummary: {
      color: theme.palette.primary.main,
      paddingLeft: 3,
      paddingRight: 3,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
      }
    },
    iconButton: {
      marginTop: 1,
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
    modified: {
      color: theme.palette.text.primary
    },
    divider: {
      background: theme.palette.secondary.dark,
      marginTop: 4,
    },
    hoverRow: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      "&:hover": {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        cursor: 'pointer',
      }
    },
    itemHover: {
      "&:hover": {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        cursor: 'pointer',
      }
    },
    table: {
      borderBottom: 'none',
      paddingTop: 0,
      paddingBottom: 0,
      fontVariant: 'all-small-caps',
      fontWeight: 'bold',
      lineHeight: 1.1
    },
  }),
);

interface ExplorerItemProps {
  article: API.CMS.Article
}

const ExplorerItem: React.FC<ExplorerItemProps> = ({ article }) => {

  const { handleInTab } = Ide.useNav();
  const site = Ide.useSite();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleExpand = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const pages: API.CMS.Page[] = Object.values(site.pages).filter(page => article.id === page.article);
  const links: API.CMS.Link[] = Object.values(site.links).filter(link => link.articles.includes(article.id));
  const workflows: API.CMS.Workflow[] = Object.values(site.workflows).filter(workflow => workflow.articles.includes(article.id));

  return (
    <>
      <ListItem className={classes.itemHover}>
        <ListItemText
          primary={<Typography onClick={handleClick} variant="body1" className={classes.nameStyle}>{article.name}</Typography>}
        />
        {open ?
          <IconButton className={classes.iconButton} onClick={handleClose}><ExpandLess /></IconButton> :
          <IconButton className={classes.iconButton} onClick={handleExpand}><ExpandMore /></IconButton>}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <TableContainer>
          <Table size="small">
            <TableBody >
              <TableRow className={classes.hoverRow} >
                <TableCell className={classes.table}>
                  Locales: {pages.map((page, index) => (<span className={classes.hoverRow} key={index}
                  onClick={() =>  handleInTab({article, type: "ARTICLE_PAGES", locale: page.locale})  }>
                  <span className={classes.localeSummary}>{page.locale}&nbsp;</span></span>))}
                </TableCell>
              </TableRow>
              <TableRow className={classes.hoverRow} >
                <TableCell className={classes.table} onClick={() => handleInTab({article, type: "ARTICLE_LINKS"})}>
                  Links:  <span className={classes.summary}>{links.length}</span>
                </TableCell>
              </TableRow>
              <TableRow className={classes.hoverRow}>
                <TableCell className={classes.table} onClick={() => handleInTab({article, type: "ARTICLE_WORKFLOWS"})}>
                  Workflows: <span className={classes.summary}>{workflows.length}</span>
                </TableCell>
              </TableRow>
              <TableRow className={classes.hoverRow} >
                <TableCell className={classes.table}>
                  Last Modified: <span className={classes.summary}>9 days ago</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <DeleteRename site={site} article={article} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
      <Divider className={classes.divider} />

    </>
  );
}

export { ExplorerItem }





