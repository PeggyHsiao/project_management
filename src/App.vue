<template>
  <v-app>
    <router-view name="layout" />
    <v-main>
      <router-view name="default" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
