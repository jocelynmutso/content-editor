import React from 'react';

import Layout from './layout';
import { Editor, toolbar, API } from './core';


interface ResourceEditorProps {

};


const Components: React.FC = () => {
  const layout = Layout.useContext();
  const site = API.createSite();
  return (
    <Layout.Container components={{
      search: (_value: string) => console.log("Search"),
      header: (<></>),
      content: (<Editor site={site}/>),
      toolbar: toolbar(layout.actions, site),
      badges: []
    }} />);
}

const ResourceEditor: React.FC<ResourceEditorProps> = ({ }) => {
  return (
      <Layout.Provider>
        <Components />
      </Layout.Provider>
  );
}

export type { ResourceEditorProps };
export { ResourceEditor };
