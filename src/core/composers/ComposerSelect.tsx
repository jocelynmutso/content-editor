import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { ArticleComposer } from './article';

import { API } from '../deps';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      maxWidth: '25%'
      
    },
    container: {
      display: 'flex'
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
          <Typography color="textSecondary">
            Description of an article
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Create</Button>
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h6">
            Page
        </Typography>
          <Typography color="textSecondary">
            Description of a page
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Create</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export { ComposerSelect }
