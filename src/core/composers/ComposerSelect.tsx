import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { ArticleComposer } from './article';
import { LinkComposer } from './link';
import { NewPage } from './page';

import { API } from '../deps';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      maxWidth: '25%'

    },
    container: {
    },
    title: {
      fontSize: 14,
    },
  }),
);


interface ComposerSelectProps {
  site: API.CMS.Site;

}

const ComposerSelect: React.FC<ComposerSelectProps> = ({ site }) => {
  const classes = useStyles();



  return (
    <div className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h6">
            Article
        </Typography>
          <Typography color="textSecondary" variant="caption">
            A group of associated Pages, Links, Workflows, and Locales
        </Typography>
        </CardContent>
        <CardActions>
          <ArticleComposer site={site} />
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h6">
            Page
        </Typography>
          <Typography color="textSecondary" variant="caption">
            One file representing one language, associated links, and associated workflows within an Article
        </Typography>
        </CardContent>
        <CardActions>
          <NewPage site={site} />
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h6">
            Link
        </Typography>
          <Typography color="textSecondary" variant="caption">
            Internal (within your domain), and external (outside your domain)
        </Typography>
        </CardContent>
        <CardActions>
          <LinkComposer site={site} />
        </CardActions>
      </Card>
    </div>
  );
}

export { ComposerSelect }
