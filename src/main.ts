import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { routes } from "./routes";
import "./index.css";
import "./global.css";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
});

if (import.meta.hot) {
  const removeRoutes = [];

  for (const route of routes) {
    removeRoutes.push(router.addRoute(route));
  }
}

if (import.meta.hot) {
  import.meta.hot?.accept("./routes.ts", ({ routes }) => {
    for (const removeRoute of removeRoutes) removeRoute();
    removeRoutes = [];
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace("");
  });
}

app.use(router);
app.use(Antd); // Đã đủ để áp dụng Ant Design Vue và các thành phần của nó
app.mount("#app");
