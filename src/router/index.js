import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './login';
import ProjectList from './projectlist';

Vue.use(VueRouter);

const routes = _.concat(
  Login,
  ProjectList,
);

const router = new VueRouter({
  routes,
});

export default router;
