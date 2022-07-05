import Authentication from "../components/Authentication";
import GlobalFeed from "../pages/GlobalFeed";
import Login from "../pages/Login";
import { GLOBAL_FEED_ROUTE, LOGIN_ROUTE } from "./consts";



export const PublicRouts = [
    {
        path:LOGIN_ROUTE,
        component:<Login/>
    },
    {
        path:GLOBAL_FEED_ROUTE,
        component:<GlobalFeed/>
    }
]

export const PrivateRouts = [
    {
        path:CHAT_ROUTE,
        
    }
]