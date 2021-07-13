import React from 'react';
import { makeStyles, createStyles, Theme, TextField } from '@material-ui/core';

import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '98%',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    input: {
      margin: theme.spacing(1),
      padding: 0,
      minWidth: '10ch',
      backgroundColor: theme.palette.background.paper
    },
  }),
);




interface LocaleComposerProps {
  site: API.CMS.Site;
}


const LocaleComposer: React.FC<LocaleComposerProps> = ({ site }) => {
  const classes = useStyles();

  const [locale, setLocale] = React.useState('');

  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <div className={classes.root}>

        <TextField className={classes.input} helperText="Two-letter locale code" placeholder="en" variant="outlined" />

    </div>

  );
}

export { LocaleComposer }

