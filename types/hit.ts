import { Remap } from './utils/remap';

interface HighlightResultField {
 matchLevel: string;
 matchedWords: string[];
 value: string;
}

interface HighlightResult {
 author?: HighlightResultField;
 comment_text?: HighlightResultField;
 story_title?: HighlightResultField;
 story_url?: HighlightResultField;
 title?: HighlightResultField;
 url?: HighlightResultField;
}

export interface APIHit {
 _highlightResult: HighlightResult;
 _tags: string[];
 author: string;
 comment_text?: string;
 created_at: string;
 created_at_i: number;
 objectID: string;
 parent_id?: number;
 story_id?: number;
 story_title?: string;
 story_url?: string;
 updated_at: string;
 children?: number[];
 title?: string;
 url?: string;
 points?: number;
 num_comments?: number;
}

type HitMapping = {
 _highlightResult: 'highlightResult';
 _tags: 'tags';
 comment_text: 'commentText';
 created_at: 'createdAt';
 created_at_i: 'createdAtI';
 objectID: 'objectId';
 parent_id: 'parentId';
 story_id: 'storyId';
 story_title: 'storyTitle';
 story_url: 'storyUrl';
 updated_at: 'updatedAt';
 num_comments: 'numComments';
};

export type Hit = Remap<APIHit, HitMapping>;
