import Vue from 'vue';
import VueRouter from 'vue-router';
import canknow from 'canknow-ui';
import { routes } from './routes';

Vue.use(VueRouter);

const routerConfig = {
  // mode: 'history',
  routes
};

VueRouter.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};

const router = new VueRouter(routerConfig);

router.beforeEach((to, from, next) => {
  canknow.LoadingBar.start();
  next();
});

// 路由跳转后操作（结束进度条特效）
router.afterEach((to, from, next) => {
  canknow.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;
