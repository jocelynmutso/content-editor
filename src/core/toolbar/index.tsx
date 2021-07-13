import React from 'react';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import LinkIcon from '@material-ui/icons/Link';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import TranslateIcon from '@material-ui/icons/Translate';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Explorer } from '../explorer';

import { Layout, API } from '../deps';



const toolbar = (actions: Layout.Session.Actions, site: API.CMS.Site, releases: API.CMS.Releases): Layout.Session.ToolbarItem[] => {
  return [

    {
      id: 'toolbar.explorer',
      icon: <LibraryBooksOutlinedIcon />,
      enabled: true,
      type: { getView: () => (<Explorer site={site} />) }
    },

    {
      id: 'toolbar.createNew',
      icon: <PostAddOutlinedIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'newItem', label: "New Item" });
        }
      }
    },

    {
      id: 'toolbar.links',
      icon: <LinkIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'links', label: "Links" });
        }
      }
    },

    {
      id: 'toolbar.workflows',
      icon: <WorkOutlineIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'workflows', label: "Workflows" });
        }
      }
    },

    {
      id: 'toolbar.releases',
      icon: <NewReleasesOutlinedIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'releases', label: "Releases" });
        }
      }
    },
    
    {
      id: 'toolbar.locales',
      icon: <TranslateIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'locales', label: "Locales" });
        }
      }
    },

  ];
}

export { toolbar };