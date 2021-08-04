import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

import MDEditor from '@uiw/react-md-editor';
import { API, Ide } from '../../deps';

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
  article: API.CMS.Article,
  locale: API.CMS.Locale
}

const PageComposer: React.FC<PageComposerProps> = ({ article, locale }) => {
  const classes = useStyles();
  const ide = Ide.useIde();
  const page = Object.values(ide.session.site.pages)
    .filter(page => page.body.article === article.id)
    .filter(page => page.body.locale === locale).pop() as API.CMS.Page;

  const value = ide.session.pages[page.id] ? ide.session.pages[page.id].value : page.body.content;
  const handleChange = (value: string | undefined) => {
    ide.actions.handlePageUpdate(page.id, value ? value : "");
  } 

  return (
    <div className={classes.container}>
      <MDEditor value={value} onChange={handleChange} />
    </div>
  );
}

export { PageComposer }