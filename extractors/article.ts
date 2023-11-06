import { APIArticle, Article } from '@/types/article';

export const extractArticle = (apiHit: APIArticle): Article => {
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

export const extractArticles = (apiArticles: APIArticle[]): Article[] => {
  return apiArticles.map((apiArticle) => extractArticle(apiArticle));
};
