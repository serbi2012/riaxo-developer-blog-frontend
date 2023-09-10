export interface IPost {
    id?: string;
    title?: string;
    tags?: string[];
    createDate?: string;
    content?: IPostParagraph[];
}

export interface IPostParagraph {
    paragraphTitle?: string;
    paragraphContent?: string;
}
