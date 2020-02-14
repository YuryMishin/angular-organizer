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



export interface IApiImages {
  id: string;
  title: string;
  description: string;
  datetime: number;
  cover: string;
  cover_width: number;
  cover_height: number;
  account_url: string;
  account_id: number;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: true;
  vote: any;
  favorite: false;
  nsfw: false;
  section: string;
  comment_count: number;
  favorite_count: number;
  topic: string;
  topic_id: number;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  tags: any;
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads: boolean;
  images: any;
  ad_config: {
    safeFlags: string[];
    highRiskFlags: any;
    unsafeFlags: string[];
    wallUnsafeFlags: any;
    showsAds: any;
  };
}


export interface IApiDataImg {
  name: string;
  display_name: string;
  followers: any;
  total_items: any;
  following: any;
  is_whitelisted: any;
  background_hash: string;
  thumbnail_hash: any;
  accent: string;
  background_is_animated: any;
  thumbnail_is_animated: any;
  is_promoted: any;
  description: string;
  logo_hash: any;
  logo_destination_url: any;
  description_annotations: any;
  items: IApiImgItems[];
}

export interface IApiImgItems {
  id: any;
  title: any;
  description: any;
  datetime: any;
  cover: any;
  cover_width: any;
  cover_height: any;
  account_url: any;
  account_id: any;
  privacy: any;
  layout: any;
  views: any;
  link: any;
  ups: any;
  downs: any;
  points: any;
  score: any;
  is_album: any;
  vote: any;
  favorite: any;
  nsfw: any;
  section: any;
  comment_count: any;
  favorite_count: any;
  topic: any;
  topic_id: any;
  images_count: any;
  in_gallery: any;
  is_ad: any;
  tags: any;
  ad_type: any;
  ad_url: any;
  in_most_viral: any;
  include_album_ads: any;
  images: Image[];
  ad_config: any;
}

export interface Image {
  id: string;
  title: any;
  description: string;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: any;
  favorite: boolean;
  nsfw: any;
  section: any;
  account_url: any;
  account_id: any;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any;
  ad_type: number;
  ad_url: string;
  edited: number;
  in_gallery: boolean;
  link: string;
  comment_count: any;
  favorite_count: any;
  ups: any;
  downs: any;
  points: any;
  score: any;
}
