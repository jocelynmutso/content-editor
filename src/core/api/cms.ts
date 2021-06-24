declare namespace CMS {

  type PageId = string;
  type LinkId = string;
  type ArticleId = string;
  type WorkflowId = string;
  type Locale = string;
  type Markdown = string;

  interface Site {
    pages: Record<PageId, Page>,
    links: Record<LinkId, Link>,
    articles: Record<ArticleId, Article>,
    workflows: Record<WorkflowId, Workflow>,
  }

  interface Page {
    id: PageId,
    article: ArticleId,
    created: string,
    modified: string,
    locale: Locale,
    content: Markdown,
  }
  
  interface PageMutator {
    id: PageId,
    locale: Locale;
    content: string;
  }

  interface Article {
    id: ArticleId,
    parentId?: ArticleId,
    name: string,
    order: number,
    pages: PageId[],
    links: LinkId[],
    workflows: WorkflowId[]
  }

  type Releases = Release[];

  interface Release {
    id: string,
    name: string,
    created: string,
    note?: string
  }

  type Links = Link[];

  interface Link {
    id: LinkId,
    article: ArticleId,
    type: string,
    content: string,
    locale: Locale,
    description: string
  }
  
  interface LinkMutator {
    id: LinkId,
    content: string, 
    locale: Locale, 
    description: string
  }

  interface Workflow {
    id: WorkflowId,
    name: string,
    locale: Locale,
    content: string
  }
  
  interface WorkflowMutator {
    id: WorkflowId, 
    name: string, 
    locale: Locale, 
    content: string
  }


  interface Service {
    getSite(): Promise<Site>,
    getReleases(): Promise<Releases>,

    create(): CreateBuilder;
    delete(): DeleteBuilder;
    update(): UpdateBuilder;
  }
  interface CreateBuilder {
    article(init: { parentId?: ArticleId, name: string, order: number }): Promise<Article>;
    page(init: { locale: Locale, content: string, }): Promise<Page>;
    link(init: { content: string, locale: Locale, description: string }): Promise<Link>;
    workflow(init: { name: string, locale: Locale, content: string }): Promise<Workflow>;
  }
  interface DeleteBuilder {
    article(id: ArticleId): Promise<void>;
    page(id: PageId): Promise<void>;
    link(id: LinkId): Promise<void>;
    workflow(id: WorkflowId): Promise<void>;
  }
  interface UpdateBuilder {
    article(id: ArticleId, mutator: { parentId?: ArticleId, name: string, order: number }): Promise<Article>;
    page(page: PageMutator): Promise<Page>;
    link(link: LinkMutator): Promise<Link>;
    workflow(workflow: WorkflowMutator): Promise<Workflow>;
  }
}

export default CMS;