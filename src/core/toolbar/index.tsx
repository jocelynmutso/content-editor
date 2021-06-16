import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { Explorer } from '../';

import { Layout } from '../deps';
import { API } from '../';


const toolbar = (actions: Layout.Session.Actions, site: API.Site): Layout.Session.ToolbarItem[] => {
  return [
    {
      id: 'toolbar.explorer',
      icon: <LibraryBooksIcon />,
      type: { getView: () => (<Explorer site={site} />) }
    },

    {
      id: 'toolbar.releases',
      icon: <NewReleasesIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({id: 'releases', label: 'Releases' });
        }
      }
    },

    {
      id: 'toolbar.delete',
      icon: <DeleteIcon />,
      type: { getView: () => (<Explorer site={API.createSite()} />) }
    },

  ];
}

export { toolbar };