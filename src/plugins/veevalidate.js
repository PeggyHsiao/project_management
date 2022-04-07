import Vue from 'vue';
import {
  ValidationObserver, ValidationProvider, extend, localize, setInteractionMode,
} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

import en from 'vee-validate/dist/locale/en';
import fra from 'vee-validate/dist/locale/fr';
import jpn from 'vee-validate/dist/locale/ja';
import kr from 'vee-validate/dist/locale/ko';
import tw from 'vee-validate/dist/locale/zh_TW';
import zh from 'vee-validate/dist/locale/zh_CN';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// Install all rules
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// Install language
localize({
  en, fra, jpn, kr, tw, zh,
});
// Set current language
localize('en');

// Verify trigger timing
setInteractionMode('eager');

export default { ValidationObserver, ValidationProvider };
