import React from 'react';
import { makeStyles, createStyles, Theme, TextField, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { LinkTable } from './LinkTable';
import { AddButton } from '../styles';
import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '98%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    accordion: {
      backgroundColor: theme.palette.info.light
    },
    select: {
      marginRight: theme.spacing(1),
      minWidth: '15ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      marginRight: theme.spacing(1),
      minWidth: '50ch',
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

interface LinkComposerProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}


const LinkComposer: React.FC<LinkComposerProps> = ({ site, article }) => {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [locale, setLocale] = React.useState('');

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  const handleLocaleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as string);
  };

  const links: API.CMS.Link[] = Object.values(site.links).filter(link => article.id === link.article);

  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /> </IconButton>}
        >
          <Typography className={classes.heading}>Create new link</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={handleTypeChange}
                label="Type"
              >
                <MenuItem value={10}>Internal</MenuItem>
                <MenuItem value={20}>External</MenuItem>
              </Select>
            </FormControl >
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel>Locale</InputLabel>
              <Select
                value={locale}
                onChange={handleLocaleChange}
                label="locale"
              >
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>FI</MenuItem>
                <MenuItem value={20}>SV</MenuItem>
              </Select>
            </FormControl >

            <TextField className={classes.formControl} label="Description" variant="outlined" />
            <TextField className={classes.formControl} label="Value" variant="outlined" />
          </Typography>
          <AddButton />
        </AccordionDetails>
      </Accordion>
      {links.length === 0 ? null : <LinkTable site={site} article={article} />}
    </div>
  );
}

export { LinkComposer }