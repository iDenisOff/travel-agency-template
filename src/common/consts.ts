export const routesPaths = {
    npmPage: "/npm",
    mainPage: "/",
    toursPage: "/tours-page",
    hotelPage: "/hotel-page",
    galleryPage: "/gallery-page",
    pagesPage: "/pages-page",
    blogPage: "/blog-page",
    contactPage: "/contact-page",
    loginPage: "/login-page",
};

export const mainMenuItems: { name: string; route: string }[] = [
    {
        name: "Home",
        route: routesPaths.mainPage,
    },
    {
        name: "Tours",
        route: routesPaths.toursPage,
    },
    {
        name: "Hotel",
        route: routesPaths.hotelPage,
    },
    {
        name: "Gallery",
        route: routesPaths.galleryPage,
    },
    {
        name: "Pages",
        route: routesPaths.pagesPage,
    },
    {
        name: "Blog",
        route: routesPaths.blogPage,
    },
    {
        name: "Contact",
        route: routesPaths.contactPage,
    },
    {
        name: "Login",
        route: routesPaths.loginPage,
    },
];
