import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { API, Layout } from '../deps';
import { PageComposer, LinkComposer, WorkflowComposer, ArticleComposer } from '../composers';
import { ReleaseComposer } from '../releases';
import { LocaleOptions } from '../locales';
import { LinksView } from '../links';
import { WorkflowsView } from '../workflows';
import Context from '../context';


const useStyles = (props: { y: number }) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `${props.y}px`,
      paddingLeft: theme.spacing(2)
    },
    left: {
      display: 'flex',
      padding: '1vw',
      backgroundColor: theme.palette.background.paper,
      height: '100%',
    },
    right: {
      flexGrow: 1,
      padding: '1vw',
      backgroundColor: theme.palette.background.default,
    },
  }),
)();


interface EditorProps {
  site: API.CMS.Site;
  releases: API.CMS.Releases;
}

const Editor: React.FC<EditorProps> = ({ site, releases }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);
  const tabs = layout.session.tabs;
  
  
  if (tabs.length === 0) {
    return null;
  }
  
  const active = tabs[layout.session.history.open];
  if (active.id === 'releases') {
    return (<ReleaseComposer releases={releases} site={site}/>);  
  } else if (active.id === 'links') {
    return (<LinksView site={site}/>)
  } else if (active.id === 'article') {
    return (<ArticleComposer />)
  } else if (active.id === 'locales') {
    return (<LocaleOptions site={site} />)
  } else if (active.id === 'workflows') {
    return (<WorkflowsView site={site} />)
  }   
  
  const article = site.articles[active.id];
  const tab: Context.Tab = active;
  if(!tab.data || !tab.data.nav) {
    return null;
  }

  
  let composer: React.ReactChild;
  if(tab.data.nav.type === "LOCALE") {
    const locale = tab.data.nav.value as string;
    composer = (<PageComposer key={article.id + "-" + locale} site={site} article={article} locale={locale} />);
  } else {
    composer = (<></>);
  }
  
  //<LinkComposer key={article.id} site={site} article={article} />
  
  return (
    <div className={classes.root} key={article.id} >
      {composer}
    </div>
  )
}

export type { EditorProps }
export { Editor }


