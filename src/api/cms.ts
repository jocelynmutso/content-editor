declare namespace CMS {

  type PageId = string;
  type LinkId = string;
  type ArticleId = string;
  type WorkflowId = string;
  type LocaleId = string;
  type Locale = string;
  type LocalisedMarkdown = string;
  type LocalisedContent = string;


  interface Site {
    locales: Record<string, SiteLocale>,
    pages: Record<PageId, Page>,
    links: Record<LinkId, Link>,
    articles: Record<ArticleId, Article>,
    workflows: Record<WorkflowId, Workflow>,
  }
  
  interface SiteLocale {
    id: LocaleId,
    value: Locale,
    enabled: boolean
  }
  
  interface LocaleMutator {
    id: LocaleId, 
    enabled: boolean
  }

  interface Page {
    id: PageId,
    article: ArticleId,
    created: string,
    modified: string,
    locale: Locale,
    content: LocalisedMarkdown,
  }
  
  interface PageMutator {
    id: PageId,
    locale: Locale;
    content: LocalisedContent;
  }

  interface Article {
    id: ArticleId,
    parentId?: ArticleId,
    name: string,
    order: number,
  }
  
  interface ArticleMutator {
    id: ArticleId, 
    parentId?: ArticleId, 
    name: string, 
    order: number
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
    articles: ArticleId[],
    type: string,
    content: LocalisedContent,
    locale: Locale,
    description: string
  }
  
  interface LinkMutator {
    id: LinkId,
    content: LocalisedContent, 
    locale: Locale, 
    description: string
  }

  interface Workflow {
    id: WorkflowId,
    articles: ArticleId[],
    name: string,
    locale: Locale,
    content: LocalisedContent
  }
  
  interface WorkflowMutator {
    id: WorkflowId, 
    name: string, 
    locale: Locale, 
    content: LocalisedContent
  }

  interface FetchIntegration {
    fetch<T>(path: string, init?: RequestInit): Promise<T>;
  }

  interface Service {
    getSite(): Promise<Site>,
    getReleases(): Promise<Releases>,

    create(): CreateBuilder;
    delete(): DeleteBuilder;
    update(): UpdateBuilder;
  }
  
  interface CreateArticle { 
    parentId?: ArticleId;
    name: string;
    order: number; 
  }
  
  interface CreateLocale {
    locale: Locale;
  }
  interface CreatePage {
    articleId: ArticleId;
    locale: Locale;
    content?: string
  }
  interface CreateLink { 
    type: "internal" | "external";
    value: string;
    locale: Locale;
    description: string; 
  }
  interface CreateWorkflow { 
    name: string;
    locale: Locale; 
    content: string; 
  }
  interface CreateRelease {
    name: string,
    note?: string
  }
  
  interface CreateBuilder {
    release(init: CreateRelease): Promise<Release>;
    locale(init: CreateLocale): Promise<SiteLocale>;
    article(init: CreateArticle): Promise<Article>;
    page(init: CreatePage): Promise<Page>;
    link(init: CreateLink): Promise<Link>;
    workflow(init: CreateWorkflow): Promise<Workflow>;
  }
  interface DeleteBuilder {
    locale(id: LocaleId): Promise<void>;
    article(id: ArticleId): Promise<void>;
    page(id: PageId): Promise<void>;
    link(id: LinkId): Promise<void>;
    linkArticlePage(link: LinkId, article: ArticleId, locale: Locale): Promise<void>;
    workflow(id: WorkflowId): Promise<void>;
    workflowArticlePage(workflow: WorkflowId, article: ArticleId, locale: Locale): Promise<void>;
    
  }
  interface UpdateBuilder {
    locale(article: LocaleMutator): Promise<SiteLocale>;
    article(article: ArticleMutator): Promise<Article>;
    pages(pages: PageMutator[]): Promise<Page[]>;
    link(link: LinkMutator): Promise<Link>;
    workflow(workflow: WorkflowMutator): Promise<Workflow>;
  }
}

export default CMS;