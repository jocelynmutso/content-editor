import React from 'react';
import { makeStyles, createStyles, Theme, InputLabel, FormControl } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    heading: {
      fontWeight: 'bold',
    },
  }),
);

type NewPageProps = {
  site: API.CMS.Site,
}

const NewPage: React.FC<NewPageProps> = ({ site }) => {
  const classes = useStyles();
  const [locale, setLocale] = React.useState('');
  const [article, setArticle] = React.useState('');


  const articles: API.CMS.Article[] = Object.values(site.articles);
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <Typography className={classes.heading}>
      <FormControl variant="outlined" className={classes.select} fullWidth>
        <InputLabel >Article</InputLabel>
        <Select
          value={article}
          onChange={({ target }) => setArticle(target.value as any)}
          label="article"
        >
          {articles.map((article, index) => (
            <MenuItem key={index} value={article.name}>{article.order}{"_"}{article.name}</MenuItem>
          ))}
        </Select>
      </FormControl >
      <FormControl variant="outlined" className={classes.select} fullWidth>
        <InputLabel >Locale</InputLabel>
        <Select
          value={locale}
          onChange={({ target }) => setLocale(target.value as any)}
          label="locale"
        >
          {locales.map((locale, index) => (
            <MenuItem key={index} value={locale.value}>{locale.value}</MenuItem>
          ))}
        </Select>
      </FormControl >
    </Typography>
  );
}

export { NewPage }