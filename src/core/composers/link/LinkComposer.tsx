import React from 'react';
import {
  makeStyles, createStyles, Theme, TextField, InputLabel, FormControl,
  MenuItem, Select, Button, Dialog, Typography, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core';


import { API, Ide } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    heading: {
      fontWeight: 'bold',
    },
  }),
);


const LinkComposer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const classes = useStyles();
  const ide = Ide.useIde();
  const { site } = ide.session;

  const [type, setType] = React.useState<'internal' | 'external'>('internal');
  const [value, setValue] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [locale, setLocale] = React.useState('fi');


  const handleCreate = () => {
    const entity: API.CMS.CreateLink = { type, value, description, locale };
    ide.service.create().link(entity).then(success => {
      console.log(success)
      onClose();
      ide.actions.handleLoadSite();
    })
  }

  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <Dialog open={true} onClose={onClose} >
      <DialogTitle>Create a new link</DialogTitle>
      <DialogContent>

        <Typography className={classes.heading}>
          <FormControl variant="outlined" className={classes.select} fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={({ target }) => setType(target.value as any)}
              label="Type">
              <MenuItem value="internal">Internal</MenuItem>
              <MenuItem value="external">External</MenuItem>
            </Select>
          </FormControl >
          <FormControl variant="outlined" className={classes.select} fullWidth>
            <InputLabel>Locale</InputLabel>
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

          <TextField className={classes.formControl}
            fullWidth
            required
            label="Description" variant="outlined" helperText="Text that the user will see"
            value={description}
            onChange={({ target }) => setDescription(target.value)} />
          <TextField className={classes.formControl}
            fullWidth
            required
            label="Value" variant="outlined" helperText="URL / path of link (http://www.example.com)"
            value={value}
            onChange={({ target }) => setValue(target.value)} />
        </Typography>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancel</Button>
        <Button onClick={handleCreate} color="primary" autoFocus disabled={!value || !locale || !description}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export { LinkComposer }