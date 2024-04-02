import Home from "~/pages/Home";
import Search from "~/pages/Search";

// Public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/search", component: Search },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
