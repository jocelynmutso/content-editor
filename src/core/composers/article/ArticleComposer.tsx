import React from 'react';
import {
  makeStyles, createStyles, Theme, TextField, InputLabel, FormControl, MenuItem, Select,
  Button, Dialog, Typography, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core';

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
  }),
);



const ArticleComposer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const classes = useStyles();
  const ide = Ide.useIde();
  const { site } = ide.session;

  const [name, setName] = React.useState("");
  const [order, setOrder] = React.useState(0);
  const [parentId, setParentId] = React.useState("");

  const handleCreate = () => {
    const entity: API.CMS.CreateArticle = { name, parentId, order };
    console.log("entity", entity)
    ide.service.create().article(entity).then(success => {
      console.log(success)
      onClose();
      ide.actions.handleLoadSite();
    });
  }

  const articles: API.CMS.Article[] = Object.values(site.articles);
  return (
    <Dialog open={true} onClose={onClose} >
      <DialogTitle>Create a new article</DialogTitle>
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
        <Button onClick={onClose} color="inherit">Cancel</Button>
        <Button onClick={handleCreate} color="primary" autoFocus disabled={!name}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export { ArticleComposer }