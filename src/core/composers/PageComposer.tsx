import React from 'react';
import { makeStyles, createStyles, Theme} from '@material-ui/core';

import MDEditor from '@uiw/react-md-editor';
import { API } from '../deps';

const useStyles = () => makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '98%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
 
    }
  }),
)();


type PageComposerProps = {
  site: API.CMS.Site,
  article: API.CMS.Article,
  locale: API.CMS.Locale
}

const PageComposer: React.FC<PageComposerProps> = ({ site, article, locale }) => {
  const classes = useStyles();
  const page = Object.values(site.pages)
    .filter(page => page.article === article.id)
    .filter(page => page.locale === locale).pop();
  
  const [value, setValue] = React.useState<string | undefined>(page?.content);
  
  return (
    <div className={classes.container}>
      <MDEditor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export { PageComposer }