export interface IPost {
    _id?: string;
    title?: string;
    tags?: string[];
    createdAt?: string;
    content?: IPostParagraph[];
}

export interface IPostParagraph {
    paragraphTitle?: string;
    paragraphContent?: string;
}
