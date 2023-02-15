//import your modules/ components here
import LoginPage from "./components/TheLoginComponent.js"
// import ErrorPage from "./modules/ErrorPage.js"





const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [ //vue will try to match the following route and render the approriate component onto the page
        {
            path: '/', // the location bar URL
           name: 'login', //the name of the route ( for priogramming navigation)
           component: LoginPage // the component render
    }
]
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp()
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);
  
  app.mount('#app');
  
  // Now the app has started