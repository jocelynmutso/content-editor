import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';
import { PageComposer } from '../composers';
import { EditorToolbar } from './EditorToolbar';
import { API, Layout} from '../deps';

const useStyles = (props: { y: number }) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `${props.y}px`
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
    <Box display='flex' className={classes.root}>
    <PageComposer />
    </Box>
  </>
  )
}

export type { EditorProps }
export { Editor }


