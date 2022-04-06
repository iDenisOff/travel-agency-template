declare namespace GalleryStyleCssNamespace {
    export interface IGalleryStyleCss {
        container: string;
        imageBottom: string;
        imageTop: string;
    }
}

declare const GalleryStyleCssModule: GalleryStyleCssNamespace.IGalleryStyleCss;

export = GalleryStyleCssModule;
