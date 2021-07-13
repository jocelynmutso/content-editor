import React from 'react';
import { makeStyles, createStyles, Theme, TextField, InputLabel, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API } from '../../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 'bold',
    },
    select: {
      margin: theme.spacing(1),
      minWidth: '40ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '60ch',
      backgroundColor: theme.palette.background.paper
    },
  }),
);



interface ArticleComposerProps {
  site: API.CMS.Site;
}


const ArticleComposer: React.FC<ArticleComposerProps> = ({ site }) => {
  const classes = useStyles();
  const [article, setArticle] = React.useState('');

  const articles: API.CMS.Article[] = Object.values(site.articles);

  return (
    <Typography className={classes.root}>
      <FormControl variant="outlined" className={classes.select}>
        <InputLabel >Parent article</InputLabel>
        <Select
          value={article}
          onChange={({ target }) => setArticle(target.value as any)}
          label="parentarticle"
        >
          {articles.map((article, index) => (
            <MenuItem key={index} value={article.name}>{article.order}{"_"}{article.name}</MenuItem>
          ))}
        </Select>
      </FormControl >
      <TextField className={classes.select} label="Order" variant="outlined" placeholder="100" helperText="3 digit numeric prefix for menu ordering purposes" />
      <TextField className={classes.formControl} label="Name" variant="outlined" />
    </Typography>
  );
}

export { ArticleComposer }