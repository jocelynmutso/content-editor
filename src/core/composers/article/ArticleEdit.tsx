import React from 'react';
import {
  makeStyles, createStyles, Theme, TextField, InputLabel, FormControl, MenuItem, Select,
  Button, Dialog, Typography, DialogTitle, DialogContent, DialogActions, IconButton
} from '@material-ui/core';
import EditOutlined from '@material-ui/icons/EditOutlined';

import { API, Ide } from '../../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 'bold',
    },
    select: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    button: {
      // padding: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
      }
    },
    margin: {
      marginRight: theme.spacing(1)
    },
    iconButton: {
      padding: 2,
      marginLeft: theme.spacing(1),
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



const ArticleEdit: React.FC<{ article: API.CMS.Article }> = ({ article }) => {
  const classes = useStyles();
  const ide = Ide.useIde();
  const { site } = ide.session;

  const [name, setName] = React.useState(article.name);
  const [order, setOrder] = React.useState(article.order);
  const [parentId, setParentId] = React.useState(article.parentId);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleCreate = () => {
    const entity: API.CMS.ArticleMutator = { id: article.id, name, parentId, order };
    console.log("entity", entity)
    ide.service.update().article(entity).then(success => {
      console.log(success)
      handleClose();
      ide.actions.handleLoadSite();
    });
  }

  const articles: API.CMS.Article[] = Object.values(site.articles);
  return (<>
    <span className={classes.margin}>
      <IconButton className={classes.iconButton} onClick={handleClickOpen}>
        <EditOutlined />
      </IconButton>
    </span>
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Edit article</DialogTitle>
      <DialogContent>
        <Typography className={classes.root}>
          <FormControl variant="outlined" className={classes.select} fullWidth>
            <InputLabel >Parent article</InputLabel>
            <Select
              value={parentId}
              onChange={({ target }) => setParentId(target.value as any)}
              label="parent article"
            >
              {articles.map((article, index) => (
                <MenuItem key={index} value={article.id}>{article.order}{"_"}{article.name}</MenuItem>
              ))}
            </Select>
          </FormControl >
          <TextField type={"number"} label="Order" variant="outlined" placeholder="100" helperText="number for ordering purposes" fullWidth className={classes.select}
            value={order}
            onChange={({ target }) => setOrder(target.value as any)} />
          <TextField className={classes.select} label="Name" variant="outlined" fullWidth required
            value={name}
            onChange={({ target }) => setName(target.value)} />
        </Typography>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">Cancel</Button>
        <Button onClick={handleCreate} color="primary" autoFocus disabled={!name}>Update</Button>
      </DialogActions>
    </Dialog>
  </>
  );
}

export { ArticleEdit }


