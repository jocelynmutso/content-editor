import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Dialog, Card, CardActions, CardContent, Typography, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import { ArticleComposer } from './article';
import { LinkComposer } from './link';
import { WorkflowComposer } from './workflow';
import { LocaleComposer } from './locale';
import { ReleaseComposer } from './release';
import { NewPage } from './page';

import { API } from '../deps';



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


interface ComposerSelectProps {
  site: API.CMS.Site;
  releases: API.CMS.Releases
}

interface CardData {
  title: string;
  dialog: string;
  desc: string;
  composer: () => React.ReactChild;
}

type CardType = "release" | "article" | "page" | "link" | "workflow" | "locale";

const createCards: (props: ComposerSelectProps) => Record<CardType, CardData> = ({ site, releases }) => ({
  article: {
    composer: () => (<ArticleComposer site={site} />),
    title: "Article",
    dialog: "Create a new article",
    desc: "A group of associated Pages, Links, Workflows, and Locales"
  },

  locale: {
    composer: () => (<LocaleComposer site={site} />),
    title: "Locale",
    dialog: "Create a new locale",
    desc: "Add, activate, and deactivate content languages globally"
  },

  page: {
    composer: () => (<NewPage site={site} />),
    title: "Page",
    dialog: "Create a new page",
    desc: "One file representing one language and its associated links and workflows within an Article",
  },

  link: {
    composer: () => (<LinkComposer site={site} />),
    title: "Link",
    dialog: "Create a new link",
    desc: "Internal links connect to content within your domain, and external links connect to content outside your domain"
  },

  workflow: {
    composer: () => (<WorkflowComposer site={site} />),
    title: "Workflow",
    dialog: "Create a new workflow",
    desc: "Connect forms and processes"
  },

  release: {
    composer: () => (<ReleaseComposer site={site} releases={releases} />),
    title: "Release",
    dialog: "Create a release",
    desc: "Create a snapshot of all site content at one certain point of time for testing or production purposes"
  },
});


//card view for all CREATE views
const ComposerSelect: React.FC<ComposerSelectProps> = ({ site, releases }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState<CardType>();
  const handleOpen = (type: CardType) => setOpen(type);
  const handleClose = () => setOpen(undefined);
  const cards = React.useMemo(() => createCards({ site, releases }), [site, releases]);

  return (
    <div className={classes.root}>
      { !open ? null : (
        <Dialog open={true} onClose={handleClose} >
          <DialogTitle>{cards[open].dialog} </DialogTitle>
          <DialogContent>{cards[open].composer()}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">Cancel</Button>
            <Button onClick={handleClose} color="primary" autoFocus>Create</Button>
          </DialogActions>
        </Dialog>
      )}

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
