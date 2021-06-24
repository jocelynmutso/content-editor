import CMS from './cms';


declare namespace Session {
  
  interface ContextType {
    session: Instance;
    actions: Actions;
    service: CMS.Service;
  }
  
  
  interface Instance {
    releases: CMS.Releases;
    site: CMS.Site;
    
    getPages(id: CMS.ArticleId): CMS.PageId[],
    getLinks(id: CMS.ArticleId): CMS.LinkId[],
    getWorkflows(id: CMS.ArticleId): CMS.WorkflowId[]
    getEditor(id: CMS.ArticleId): Editor | undefined;
  }
  
  interface Actions {
    handleReload(): Promise<void>;
    handleEditor(article: CMS.Article): Promise<void>;
    handleEditorChange(article: CMS.Article, change: EditorChange): Promise<void>;
  }
  
  interface EditorChange {
    page?: CMS.PageMutator,
    link?: CMS.LinkMutator,
    workflow?: CMS.WorkflowMutator
  }
  
  interface Editor {
    article: CMS.Article;
    saved: boolean;
    pages: {
      updates: Record<CMS.PageId, {
        value: CMS.PageMutator,
        origin: CMS.Page,
        saved: boolean
      }>,
    },
    links: {
      updates: Record<CMS.LinkId, {
        value: CMS.LinkMutator,
        origin: CMS.Link,
        saved: boolean
      }>,
    },
    workflows: {
      updates: Record<CMS.WorkflowId, {
        value: CMS.WorkflowMutator,
        origin: CMS.Link,
        saved: boolean
      }>,
    }
  }
}


export default Session;