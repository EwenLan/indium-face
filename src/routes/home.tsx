import { RouteGroup } from "../common/route"
import { SecondPage } from "../pages/home/secondpage"
import { Welcome } from "../pages/home/welcome"

export const HomeIndex = RouteGroup({
    pathPrefix: "/home",
    routes: [
        { pathName: "welcome", title: "Welcome", element: <Welcome /> },
        { pathName: "secondpage", title: "Second Page", element: <SecondPage /> },
    ]
})