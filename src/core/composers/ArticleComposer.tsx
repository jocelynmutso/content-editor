import React from 'react';
import { makeStyles, createStyles, Theme, TextField, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Create } from '../buttons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '98%',
      margin: theme.spacing(1)
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
      backgroundColor: theme.palette.background.paper,
      minWidth: '60ch'
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
}


const ArticleComposer: React.FC<ArticleComposerProps> = () => {
  const classes = useStyles();
  const [locale, setLocale] = React.useState('');


  const handleLocaleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /> </IconButton>}
        >
          <Typography className={classes.heading}>Create new Article</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel>Parent</InputLabel>
              <Select
                value={locale}
                onChange={handleLocaleChange}
                label="Parent"
              >
                <MenuItem value={10}>none</MenuItem>
                <MenuItem value={20}>300_residence</MenuItem>
                <MenuItem value={30}>350_construction</MenuItem>
                <MenuItem value={40}>450_education</MenuItem>
              </Select>
            </FormControl >
            <TextField className={classes.select} label="Order" variant="outlined" />
            <TextField className={classes.formControl} label="Name" variant="outlined" />
          </Typography>
           <Create />
        </AccordionDetails>
                         
      </Accordion>
    </div>
  );
}

export { ArticleComposer }