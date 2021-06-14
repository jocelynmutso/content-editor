import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { Explorer } from '../';

import { Layout } from '../deps';
import { API } from '../';

const toolbar = (): Layout.Session.ToolbarItem[] => {
  return [
    { id: 'toolbar.explorer',
      icon: <LibraryBooksIcon />,     
      type: { getView: () => (<Explorer site={API.create()}/>) } },
    { id: 'toolbar.manager',
      icon: <NewReleasesIcon />,     
      type: { getView: () => (<Explorer site={API.create()}/>) } },
    { id: 'toolbar.delete',
      icon: <DeleteIcon />,     
      type: { getView: () => (<Explorer site={API.create()}/>) } },
      
  ];
}

export {toolbar};