import React from 'react';
import { makeStyles, createStyles, Theme, TextField, Button, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    select: {
      margin: theme.spacing(1),
      minWidth: '20ch',
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
  const [open, setOpen] = React.useState(false);
  const [locale, setLocale] = React.useState('');
  const [article, setArticle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  const articles: API.CMS.Article[] = Object.values(site.articles);
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <div className={classes.root}>
      <Button onClick={handleClickOpen} size="small">Create</Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Create a new page"} </DialogTitle>
        <DialogContent>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel >Article</InputLabel>
              <Select
                value={article}
                onChange={({target}) => setArticle(target.value as any)}
                label="article"
              >
                {articles.map((article, index) => (
                  <MenuItem key={index} value={article.name}>{article.order}{"_"}{article.name}</MenuItem>
                ))}
              </Select>
            </FormControl >
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel >Locale</InputLabel>
              <Select
                value={locale}
                onChange={({target}) => setLocale(target.value as any)}
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
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export { NewPage }