// 완료
type ExternalUrl = {
  spotify?: string;
};

// 완료n
type Image = {
  url: string;
  height: number | null;
  width: number | null;
};

// 완료n
type Followers = {
  href: string | null;
  total: number;
};

// 완료
type SimplifiedArtist = {
  external_urls?: ExternalUrl;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
};

type Artist = {
  external_urls?: ExternalUrl;
  followers?: Followers;
  genres?: string[];
  href?: string;
  id?: string;
  images?: Image[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
};

// 완료
type Album = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: SimplifiedArtist[];
};

// 완료n
type ExternalIds = {
  isrc?: string;
  ean?: string;
  upc?: string;
};

//완료n
type TrackObject = {
  album?: Album;
  artists?: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: ExternalIds;
  external_urls?: ExternalUrl;
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: any;
  restrictions?: {
    reason: string;
  };
  name?: string;
  popularity?: number;
  preview_url?: string | null;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
};

type SearchResponseTypes = {
  tracks: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: TrackObject[];
  };
  artists: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: any;
    // items: ArtistObject[];
  };
  // albums: {
  //   href: string;
  //   limit: number;
  //   next: string | null;
  //   offset: number;
  //   previous: string | null;
  //   total: number;
  // 	items: any;
  //   // items: SimplifiedAlbumObject[];
  // };
};
