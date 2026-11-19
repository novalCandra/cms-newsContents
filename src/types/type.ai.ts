export type TypeArticleData = {
    sourceWebsite: string;
    narasumber: string;
    readingTime: string;
    pageCount: string;
    summary: string;
    keyPoints: string[];
    instagram: {
        hook: string;
        caption: string;
        hashtags: string[];
    };
    tiktok: {
        hook: string;
        script: string;
        onScreenText: string[];
    };
}

export type TypeApiReponse = {
    status: boolean;
    data: TypeArticleData
}