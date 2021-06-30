import React from 'react';

import { API, Layout } from './deps';
import { Editor } from './editor';
import { toolbar } from './toolbar';

interface CMSEditorProps {
  service: API.CMS.Service,
};


const Components: React.FC<{ service: API.CMS.Service }> = ({ service}) => {
  const layout = Layout.useContext();
  const [site, setSite] = React.useState<API.CMS.Site>();
  const [releases, setReleases] = React.useState<API.CMS.Releases>([]);

  React.useLayoutEffect(() => {
    service.getSite().then(setSite);
    service.getReleases().then(setReleases);
  }, [service]);

  if (!site) {
    return null;
  }

  return (
    <Layout.Container components={{
      search: (_value: string) => console.log("Search"),
      header: (<></>),
      content: (<Editor site={site} releases={releases}/>),
      toolbar: toolbar(layout.actions, site, releases),
      badges: []
    }} />);
}

const CMSEditor: React.FC<CMSEditorProps> = ({ service }) => {
  return (
    <Layout.Provider>
      <Components service={service} />
    </Layout.Provider>
  );
}

export type { CMSEditorProps };
export { CMSEditor };
