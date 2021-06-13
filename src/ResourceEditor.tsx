import React from 'react';

import Layout from './layout';
import { PathView, Editor, Explorer, API, toolbar } from './core';


interface ResourceEditorProps {

};


const Components: React.FC = () => {
  const layout = Layout.useContext();
  return (
    <Layout.Container components={{
      search: (_value: string) => console.log("Search"),
      header: (<></>),
      content: (<Editor />),
      toolbar: toolbar(),
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
