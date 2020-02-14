export interface IApiNews {
  hits: IApiHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}
export interface IApiHit {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: any;
  comment_text: any;
  num_comments: number;
  story_id: any;
  story_title: any;
  story_url: any;
  parent_id: any;
  created_at_i: number;
  _tags: string [];
  objectID: string;
}
