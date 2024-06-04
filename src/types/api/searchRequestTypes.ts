type SearchRequestTypes = {
  q: string;
  type: string[];
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: string;
};
