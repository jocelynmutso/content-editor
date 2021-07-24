import React from 'react';
import {
  makeStyles, createStyles, Theme, TextField,
  Button, Dialog, Typography, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core';

import { API, Ide } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontWeight: 'bold',
    },
    input: {
      margin: theme.spacing(1),
      padding: 0,
      backgroundColor: theme.palette.background.paper
    },
  }),
);


const LocaleComposer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const classes = useStyles();
  const ide = Ide.useIde();
  const { site } = ide.session;

  const [locale, setLocale] = React.useState("");

  const handleCreate = () => {
    const entity: API.CMS.CreateLocale = { locale };
    console.log("entity", entity)
    ide.service.create().locale(entity).then(success => {
      console.log(success)
      onClose();
      ide.actions.handleLoadSite();
    });
  }


  const locales: API.CMS.Locale[] = Object.values(site.locales).map(l => l.value);

  return (
    <Dialog open={true} onClose={onClose} >
      <DialogTitle>Create a new locale</DialogTitle>
      <DialogContent>

        <Typography className={classes.root}>
          <TextField className={classes.input} helperText="Two-letter locale code" placeholder="en" variant="outlined" fullWidth required
            value={locale}
            onChange={({ target }) => setLocale(target.value as any)} />
        </Typography>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancel</Button>
        <Button onClick={handleCreate} color="primary" autoFocus disabled={!locale || locales.includes(locale) || locale.length != 2}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export { LocaleComposer }

