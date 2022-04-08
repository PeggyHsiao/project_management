import Vue from 'vue';

const store = Vue.observable({ versionData: null });

Object.defineProperty(
  Vue.prototype,
  '$versionData',
  {
    get() { return store.versionData; },
    set(val) { store.versionData = val; },
  },
);
