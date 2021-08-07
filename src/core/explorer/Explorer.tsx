import React from 'react';
import { createStyles, Theme, makeStyles, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Ide } from '../deps';
import { ArticleComposer } from '../composers';
import { ExplorerItem } from './ExplorerItem'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerContainer: {
      overflow: 'auto',
    },
    button: {
      margin: theme.spacing(1),
      flexGrow: 1,
      color: theme.palette.background.paper,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }),
);


const Explorer: React.FC<{}> = () => {
  const classes = useStyles();
  const site = Ide.useSite();
  const paths = Object.values(site.articles);

  const [openArticleComposer, setOpenArticleComposer] = React.useState(false);


  return (
    <div className={classes.drawerContainer}>
      { paths.length !== 0 ? null : (
        <div>
         { openArticleComposer ? <ArticleComposer onClose={() => setOpenArticleComposer(false) } /> : null} 
          <Button className={classes.button} variant="contained" color="primary" onClick={() => setOpenArticleComposer(true)} >
            <FormattedMessage id='article.composer.title' />
          </Button>
        </div>)
      }
      {paths.map((path, index) => (<ExplorerItem key={index} article={path} />))}
    </div>
  );
}

export { Explorer }

