import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';

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
    title: "composer.article.title",
    desc: "composer.article.desc"
  },

  locale: {
    composer: (handleClose) => (<LocaleComposer onClose={handleClose}/>),
    title: "composer.locale.title",
    desc: "composer.locale.desc"
  },

  page: {
    composer: (handleClose) => (<NewPage onClose={handleClose}/>),
    title: "composer.page.title",
    desc: "composer.page.desc",
  },

  link: {
    composer: (handleClose) => (<LinkComposer onClose={handleClose}/>),
    title: "composer.link.title",
    desc: "composer.link.desc"
  },

  workflow: {
    composer: (handleClose) => (<WorkflowComposer onClose={handleClose}/>),
    title: "composer.workflow.title",
    desc: "composer.workflow.desc"
  },

  release: {
    composer: (handleClose) => (<ReleaseComposer onClose={handleClose}/>),
    title: "composer.release.title",
    desc: "composer.release.desc"
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
        <Card key={index} className={classes.container} variant="elevation">
          <CardContent>
            <Typography variant="h6"><FormattedMessage id={card[1].title}/></Typography>
            <Typography color="textSecondary" variant="caption"><FormattedMessage id={card[1].desc}/></Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={() => handleOpen(card[0] as any)} size="small"><FormattedMessage id="button.create"/></Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export { ComposerSelect }
