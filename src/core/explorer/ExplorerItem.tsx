import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, TableContainer,
  Table, TableRow, TableCell, TableBody, IconButton,
  Button, ListItem, ListItemText, Collapse
} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FormattedMessage } from 'react-intl';

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
        color: theme.palette.secondary.dark
      }
    },
    summary: {
      fontWeight: 'bold',
      paddingLeft: 3,
      paddingRight: 3,
      color: theme.palette.secondary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.paper,
        borderRadius: 3
      }
    },
    localeSummary: {
      color: theme.palette.secondary.dark,
      paddingLeft: 3,
      paddingRight: 3,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.paper,
        borderRadius: 3
      }
    },
    iconButton: {
      marginTop: 1,
      color: theme.palette.primary.main,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.primary.light,
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
      marginTop: 4,
    },
    hoverRow: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      "&:hover": {
        fontWeight: 'bold',
        cursor: 'pointer',
      }
    },
    itemHover: {
      "&:hover": {
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
    pageButtons: {
      '& > *': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    pageButton: {
      backgroundColor: theme.palette.info.main
    }

  }),
);

interface ExplorerItemProps {
  article: API.CMS.Article
}

const ExplorerItem: React.FC<ExplorerItemProps> = ({ article }) => {

  const { handleInTab } = Ide.useNav();
  const ide = Ide.useIde();
  const site = ide.session.site;
  const unsaved = Ide.useUnsaved(article);

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

  const handleSavePages = () => {
    const unsaved: API.CMS.PageMutator[] = Object.values(ide.session.pages)
      .filter(p => !p.saved)
      .filter(p => p.origin.body.article === article.id)
      .map(p => ({ id: p.origin.id, locale: p.origin.body.locale, content: p.value }));

    ide.service.update().pages(unsaved).then(success => {
      ide.actions.handlePageUpdateRemove(success.map(p => p.id));
    });
  }

  const pages: API.CMS.Page[] = Object.values(site.pages).filter(page => article.id === page.body.article);
  const links: API.CMS.Link[] = Object.values(site.links).filter(link => link.body.articles.includes(article.id));
  const workflows: API.CMS.Workflow[] = Object.values(site.workflows).filter(workflow => workflow.body.articles.includes(article.id));

  return (
    <>
      <ListItem className={classes.itemHover}>
        <ListItemText
          primary={<Typography onClick={handleClick} variant="body1" className={classes.nameStyle}>{article.body.name}</Typography>}
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
                  <FormattedMessage id="locales" /> {pages.map((page, index) => (<span className={classes.hoverRow} key={index}
                    onClick={() => handleInTab({ article, type: "ARTICLE_PAGES", locale: page.body.locale })}>
                    <span className={classes.localeSummary}>{page.body.locale}&nbsp;</span></span>))}
                </TableCell>
              </TableRow>

              {unsaved ? (<TableRow>
                <TableCell className={classes.table}>
                  <div className={classes.pageButtons}>
                    <Button className={classes.pageButton} fullWidth onClick={handleSavePages}><FormattedMessage id="pages.save" /></Button>
                  </div>
                </TableCell>
              </TableRow>) : null}


              <TableRow className={classes.hoverRow} >
                <TableCell className={classes.table} onClick={() => handleInTab({ article, type: "ARTICLE_LINKS" })}>
                  <FormattedMessage id="links" /> <span className={classes.summary}>{links.length}</span>
                </TableCell>
              </TableRow>
              <TableRow className={classes.hoverRow}>
                <TableCell className={classes.table} onClick={() => handleInTab({ article, type: "ARTICLE_WORKFLOWS" })}>
                  <FormattedMessage id="workflows" /> <span className={classes.summary}>{workflows.length}</span>
                </TableCell>
              </TableRow>
              <TableRow className={classes.hoverRow} >
                <TableCell className={classes.table}>
                  <FormattedMessage id="modified" /> <span>9 days ago</span>
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





