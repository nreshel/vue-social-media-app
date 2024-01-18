// import vue and vue-router
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import your components
import App from "./App.vue";
import HomeFeed from "./views/HomeFeed.vue";
import UserProfile from "./views/UserProfile.vue";

// create a router instance
const router = createRouter({
  // use history mode to avoid hash in the URL
  history: createWebHistory(),
  // define your routes
  routes: [
    // map the root path to the HomeFeed component
    {
      path: "/",
      name: "Home",
      component: HomeFeed,
    },
    // map the /user/:id path to the UserProfile component
    // the :id is a dynamic segment that can match any user id
    {
      path: "/user/:id",
      name: "User",
      component: UserProfile,
      // use props to pass the id as a prop to the component
      props: true,
    },
  ],
});

// create a vue app and use the router
const app = createApp(App);
app.use(router);
app.mount("#app");
