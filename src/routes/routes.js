import Homepage from "../pages/Chat/Homepage";
import ChatUI from "../pages/Home/chatUI";
import SignIn from "../pages/Login/Login";
// import MainChat from "../pages/ChatUserInterface/MainChat";
const allRoutes = [
    { 'path': '/', component: Homepage },
    { 'path': '/chat', component: ChatUI },
    { 'path': '/Login', component: SignIn },
    // { 'path': '/Main', component: MainChat },
]
export { allRoutes }