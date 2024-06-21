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

let removeRoutes: (() => void)[] = []; // Chỉ định kiểu dữ liệu của mảng removeRoutes

if (import.meta.hot) {
  for (const route of routes) {
    removeRoutes.push(router.addRoute(route));
  }
}

if (import.meta.hot) {
  import.meta.hot?.accept("./routes.ts", ({ routes }) => {
    for (const removeRoute of removeRoutes) removeRoute();
    removeRoutes = []; // Gán lại giá trị sau khi đã khai báo là let
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace("");
  });
}

app.use(router);
app.use(Antd);
app.mount("#app");
