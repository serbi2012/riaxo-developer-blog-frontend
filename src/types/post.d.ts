export interface IPost {
    _id?: string;
    title?: string;
    tags?: string[];
    createdAt?: string;
    content?: string;
    summaryContent?: string;
    thumbnailURL?: string;
    prevPost?: {
        _id?: string;
        title?: string;
        tags?: string[];
        createdAt?: string;
        content?: string;
        summaryContent?: string;
        thumbnailURL?: string;
    };
    nextPost?: {
        _id?: string;
        title?: string;
        tags?: string[];
        createdAt?: string;
        content?: string;
        summaryContent?: string;
        thumbnailURL?: string;
    };
}
