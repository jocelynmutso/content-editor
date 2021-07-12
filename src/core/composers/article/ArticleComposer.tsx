import React from 'react';
import { makeStyles, createStyles, Theme, TextField, Button, InputLabel, FormControl } from '@material-ui/core';
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
      minWidth: '40ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '60ch',
      backgroundColor: theme.palette.background.paper
    },
    heading: {
      fontWeight: 'bold',
    },
    iconButton: {
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }),
);



interface ArticleComposerProps {
  site: API.CMS.Site;
}


const ArticleComposer: React.FC<ArticleComposerProps> = ({ site }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [article, setArticle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const articles: API.CMS.Article[] = Object.values(site.articles);

  return (
    <div className={classes.root}>
      <Button onClick={handleClickOpen} size="small">Create</Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Create a new article"} </DialogTitle>
        <DialogContent>
          <Typography className={classes.heading}>
          <FormControl variant="outlined" className={classes.select}>
              <InputLabel >Parent article</InputLabel>
              <Select
                value={article}
                onChange={({target}) => setArticle(target.value as any)}
                label="parentarticle"
              >
                {articles.map((article, index) => (
                  <MenuItem key={index} value={article.name}>{article.order}{"_"}{article.name}</MenuItem>
                ))}
              </Select>
            </FormControl >
            <TextField className={classes.select} label="Order" variant="outlined" defaultValue="100" helperText="3 digit numeric prefix for menu ordering purposes" />
            <TextField className={classes.formControl} label="Name" variant="outlined" />
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

export { ArticleComposer }