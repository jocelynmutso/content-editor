import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';
import { EditorToolbar } from './EditorToolbar';
import { API, Layout} from '../deps';
import { PageComposer, LinkComposer } from '../composers';

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

}

const Editor: React.FC<EditorProps> = ({site}) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);
  
  const tabs = layout.session.tabs;
  if(tabs.length === 0) {
    return null;
  }
  const active = tabs[layout.session.history.open];  
  if(active.id === 'releases') {
    //return (<Releases releases={releases} site={site}/>);  
  } 

  return (<>
    <div className={classes.root}>
      <EditorToolbar />
      <PageComposer />
      <LinkComposer />
    </div>
  </>
  )
}

export type { EditorProps }
export { Editor }


