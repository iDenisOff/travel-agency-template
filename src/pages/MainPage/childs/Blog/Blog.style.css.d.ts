declare namespace BlogStyleCssNamespace {
    export interface IBlogStyleCss {
        background: string;
        container: string;
        image: string;
    }
}

declare const BlogStyleCssModule: BlogStyleCssNamespace.IBlogStyleCss;

export = BlogStyleCssModule;
