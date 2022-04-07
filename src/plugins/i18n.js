import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '@/lang/en';
import fra from '@/lang/fra';
import jpn from '@/lang/jpn';
import kr from '@/lang/kr';
import tw from '@/lang/tw';
import zh from '@/lang/zh';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  messages: {
    en,
    fra,
    jpn,
    kr,
    tw,
    zh,
  },
});
