import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Dialog, Card, CardActions, CardContent, Typography, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import { ArticleComposer } from './article';
import { LinkComposer } from './link';
import { WorkflowComposer } from './workflow';
import { LocaleComposer } from './locale';
import { ReleaseComposer } from './release';
import { NewPage } from './page';

import { API, Ide } from '../deps';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    container: {
      margin: theme.spacing(1),
      maxWidth: '25%'
    },
    title: {
      fontSize: 14,
    },
  }),
);

interface CardData {
  title: string;
  desc: string;
  composer: (handleClose: () => void) => React.ReactChild;
}

type CardType = "release" | "article" | "page" | "link" | "workflow" | "locale";

const createCards: (site: API.CMS.Site, releases: API.CMS.Releases) => Record<CardType, CardData> = (site, releases) => ({
  article: {
    composer: (handleClose) => (<ArticleComposer onClose={handleClose}/>),
    title: "Article",
    desc: "A group of associated Pages, Links, Workflows, and Locales"
  },

  locale: {
    composer: (handleClose) => (<LocaleComposer onClose={handleClose}/>),
    title: "Locale",
    desc: "Add, activate, and deactivate content languages globally"
  },

  page: {
    composer: (handleClose) => (<NewPage onClose={handleClose}/>),
    title: "Page",
    desc: "One file representing one language and its associated links and workflows within an Article",
  },

  link: {
    composer: (handleClose) => (<LinkComposer onClose={handleClose}/>),
    title: "Link",
    desc: "Internal links connect to content within your domain, and external links connect to content outside your domain"
  },

  workflow: {
    composer: (handleClose) => (<WorkflowComposer onClose={handleClose}/>),
    title: "Workflow",
    desc: "Connect forms and processes"
  },

  release: {
    composer: (handleClose) => (<ReleaseComposer onClose={handleClose}/>),
    title: "Release",
    desc: "Create a snapshot of all site content at one certain point of time for testing or production purposes"
  },
});


//card view for all CREATE views
const ComposerSelect: React.FC<{}> = () => {
  const classes = useStyles();
  const { site, releases } = Ide.useIde().session;
  const [open, setOpen] = React.useState<CardType>();
  const handleOpen = (type: CardType) => setOpen(type);
  const handleClose = () => setOpen(undefined);
  const cards = React.useMemo(() => createCards(site, releases), [site, releases]);

  return (
    <div className={classes.root}>
      { !open ? null : ( cards[open].composer(handleClose) )}

      {Object.entries(cards).map((card, index) => (
        <Card key={index} className={classes.container} variant="outlined">
          <CardContent>
            <Typography variant="h6">{card[1].title}</Typography>
            <Typography color="textSecondary" variant="caption">{card[1].desc}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleOpen(card[0] as any)} size="small">Create</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export { ComposerSelect }
