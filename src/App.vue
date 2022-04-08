<template>
  <v-app>
    <router-view name="layout" />
    <v-main>
      <router-view name="default" />
    </v-main>
  </v-app>
</template>

<script>
import { version } from '@/api/login';

export default {
  name: 'App',
  created() {
    version().then((res) => {
      this.$versionData = res.data;

      const language = ['en', 'fra', 'jpn', 'kr', 'tw', 'zh'];
      if (!language.includes(`${res.data.serverLanguage}`)) {
        document.cookie = 'serverLanguage=en';
      } else {
        document.cookie = `serverLanguage=${res.data.serverLanguage}`;
      }
    });
  },
};
</script>
