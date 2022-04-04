declare namespace MenuStyleCssNamespace {
    export interface IMenuStyleCss {
        button: string;
        container: string;
        menuItem: string;
        menuItemText: string;
        menuItemTextActive: string;
    }
}

declare const MenuStyleCssModule: MenuStyleCssNamespace.IMenuStyleCss;

export = MenuStyleCssModule;
