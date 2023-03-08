//import your modules/components here
import LoginPage from "./components/TheLoginComponent.js";
import AllUsersPage from "./components/TheAllUsersComponents.js";
import DefaultHome from "./components/TheDefaultHomeComponent.js";
import KidsHome from "./components/TheKidsHomeComponent.js";

//import HomePage from "./modules/HomePage.js";
//import ErrorPage from "./modules/ErrorPage.js";


const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [//vue will try to match following route
    // and render the appropriate component onto the page
        {
            path: '/',//the location bar URL
            name: 'login', // the name of the route (for programmatic navidation)
            component: LoginPage //the component to render
        },
      
      {
            path: '/users',//the location bar URL
            name: 'allusers', // the name of the route (for programmatic navidation)
            component: AllUsersPage //the component to render
        },
        {
          path: '/home',//the location bar URL
          name: 'defaulthome', // the name of the route (for programmatic navidation)
          component: DefaultHome //the component to render
      },
      {
        path: '/kidshome',//the location bar URL
        name: 'kidshome', // the name of the route (for programmatic navidation)
        component: KidsHome //the component to render
    }
  ] // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp()
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.mount('#app');
