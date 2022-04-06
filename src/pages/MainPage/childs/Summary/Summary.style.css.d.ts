declare namespace SummaryStyleCssNamespace {
    export interface ISummaryStyleCss {
        button: string;
        buttonWhite: string;
        container: string;
        containerButtons: string;
        containerSummary: string;
        header: string;
        text: string;
    }
}

declare const SummaryStyleCssModule: SummaryStyleCssNamespace.ISummaryStyleCss;

export = SummaryStyleCssModule;
