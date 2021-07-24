import React from 'react';
import {
  makeStyles, createStyles, Theme, InputLabel, FormControl, Button,
  Dialog, Typography, DialogTitle, DialogContent, DialogActions, MenuItem, Select
} from '@material-ui/core';

import { API, Ide } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    root: {
      fontWeight: 'bold',
    },
  }),
);

const NewPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const classes = useStyles();
  const ide = Ide.useIde();
  const { site } = ide.session;
  const [locale, setLocale] = React.useState('');
  const [articleId, setArticleId] = React.useState('');

  const handleCreate = () => {
    const entity: API.CMS.CreatePage = { articleId, locale };
    ide.service.create().page(entity).then(success => {
      console.log(success)
      onClose();
      ide.actions.handleLoadSite();
    })
  }

  const articles: API.CMS.Article[] = Object.values(site.articles);
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <Dialog open={true} onClose={onClose} >
      <DialogTitle>Create a new page</DialogTitle>
      <DialogContent>

        <Typography className={classes.root}>
          <FormControl variant="outlined" className={classes.select} fullWidth>
            <InputLabel >Article</InputLabel>
            <Select
              value={articleId}
              onChange={({ target }) => setArticleId(target.value as any)}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancel</Button>
        <Button onClick={handleCreate} color="primary" autoFocus disabled={!locale}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export { NewPage }