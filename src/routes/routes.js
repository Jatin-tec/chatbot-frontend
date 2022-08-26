import Homepage from "../pages/Chat/Homepage";
import ChatUI from "../pages/Home/chatUI";
import SignIn from "../pages/Login/Login";
import Basics from "../components/Chat/Basic";
// import MainChat from "../pages/ChatUserInterface/MainChat";
const allRoutes = [
    { 'path': '/', component: Homepage },
    { 'path': '/chat', component: Basics },
    { 'path': '/Login', component: SignIn },
    // { 'path': '/Main', component: MainChat },
]
export { allRoutes }