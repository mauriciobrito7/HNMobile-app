import { APIHit, Hit } from '@/types/hit';

export const extractHit = (apiHit: APIHit): Hit => {
  return {
    highlightResult: apiHit._highlightResult,
    tags: apiHit._tags,
    author: apiHit.author,
    commentText: apiHit.comment_text,
    createdAt: apiHit.created_at,
    createdAtI: apiHit.created_at_i,
    objectId: apiHit.objectID,
    parentId: apiHit.parent_id,
    storyId: apiHit.story_id,
    storyTitle: apiHit.story_title,
    storyUrl: apiHit.story_url,
    updatedAt: apiHit.updated_at,
    children: apiHit.children,
    title: apiHit.title,
    url: apiHit.url,
    points: apiHit.points,
    numComments: apiHit.num_comments,
  };
};

export const extractHits = (apiHits: APIHit[]): Hit[] => {
  return apiHits.map((apiHit) => extractHit(apiHit));
};
