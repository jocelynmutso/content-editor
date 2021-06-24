import React from 'react';

import Layout from './layout';
import { Editor, toolbar, API } from './core';

interface ResourceEditorProps {
  service: API.CMS.Service,
};


const Components: React.FC<{service: API.CMS.Service}> = ({service}) => {
  const layout = Layout.useContext();
  const [site, setSite] = React.useState<API.CMS.Site>();
  
  React.useLayoutEffect(() => {
    service.getSite().then(setSite);
  }, [service]);
  
  if(!site) {
    return null;
  }
  
  return (
    <Layout.Container components={{
      search: (_value: string) => console.log("Search"),
      header: (<></>),
      content: (<Editor site={site}/>),
      toolbar: toolbar(layout.actions, site),
      badges: []
    }} />);
}

const ResourceEditor: React.FC<ResourceEditorProps> = ({service}) => {
  return (
      <Layout.Provider>
        <Components service={service}/>
      </Layout.Provider>
  );
}

export type { ResourceEditorProps };
export { ResourceEditor };
