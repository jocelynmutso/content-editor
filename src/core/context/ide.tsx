import React from 'react';

import { API, Layout } from '../deps';
import { ReducerDispatch, Reducer } from './Reducer';
import { SessionData, ImmutableTabData } from './SessionData';

declare namespace Ide {

  type NavType = "ARTICLE_LINKS" | "ARTICLE_WORKFLOWS" | "ARTICLE_PAGES";

  interface Nav {
    type: NavType;
    value?: string;
  }

  interface TabData {
    nav?: Nav
    withNav(nav: Nav): TabData;
  }

  interface Tab extends Layout.Session.Tab<TabData> {

  }

  interface PageUpdate {
    saved: boolean;
    origin: API.CMS.Page;
    value: API.CMS.LocalisedContent;
    withValue(value: API.CMS.LocalisedContent): PageUpdate;
  }

  interface Session {
    site: API.CMS.Site,
    releases: API.CMS.Releases
    
    pages: Record<API.CMS.PageId, PageUpdate>;
    
    withPage(page: API.CMS.PageId): Session;
    withPageValue(page: API.CMS.PageId, value: API.CMS.LocalisedContent): Session;
    
    withSite(site: API.CMS.Site): Session;
    withReleases(releases: API.CMS.Releases): Session;
  }

  interface Actions {
    handleLoad(): Promise<void>;
    handleLoadReleases(): Promise<void>;
    handleLoadSite(): Promise<void>;
    handlePageUpdate(page: API.CMS.PageId, value: API.CMS.LocalisedContent): void;
  }

  interface ContextType {
    session: Session;
    actions: Actions;
    service: API.CMS.Service;
  }
}

namespace Ide {
  const sessionData = new SessionData({});

  export const createTab = (props: { nav: Ide.Nav, page?: API.CMS.Page  }) => new ImmutableTabData(props);

  export const IdeContext = React.createContext<ContextType>({
    session: sessionData,
    actions: {} as Actions,
    service: {} as API.CMS.Service
  });

  export const useIde = () => {
    const result: ContextType = React.useContext(IdeContext);
    return result;
  }

  export const useSite = () => {
    const result: ContextType = React.useContext(IdeContext);
    return result.session.site;
  }

  export const useReleases = () => {
    const result: ContextType = React.useContext(IdeContext);
    return result.session.releases;
  }

  export const useNav = () => {
    const layout = Layout.useContext();
    const site = useSite();
    
    const handleInTab = (props: {article: API.CMS.Article, type: Ide.NavType, locale?: string}) => {
      const nav = { type: props.type, value: props.locale };
      const tab: Ide.Tab = {
        id: props.article.id,
        label: props.article.name, data: Ide.createTab({ nav })
      };

      const oldTab = layout.session.findTab(props.article.id);
      if (oldTab !== undefined) {
        layout.actions.handleTabData(props.article.id, (oldData: Ide.TabData) => oldData.withNav(nav));
      }
      layout.actions.handleTabAdd(tab);
    }

    return { handleInTab };
  }
  
  export const Provider: React.FC<{ children: React.ReactNode, service: API.CMS.Service }> = ({ children, service }) => {
    const [session, dispatch] = React.useReducer(Reducer, sessionData);
    const actions = React.useMemo(() => {
      console.log("init ide dispatch");
      return new ReducerDispatch(dispatch, service)
    }, [dispatch, service]);

    React.useLayoutEffect(() => {
      console.log("init ide data");
      actions.handleLoad();
    }, [service]);

    return (<IdeContext.Provider value={{ session, actions, service }}>{children}</IdeContext.Provider>);
  };
}

export default Ide;
