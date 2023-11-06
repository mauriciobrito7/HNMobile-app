import { APIArticle } from './article';

export interface APISearch {
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: APIArticle[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    _request: {
      roundTrip: number;
    };
    afterFetch: {
      merge: {
        total: number;
      };
      total: number;
    };
    fetch: {
      query: number;
      total: number;
    };
    total: number;
  };
  query: string;
  serverTimeMS: number;
}
