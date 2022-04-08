<template>
  <div class="login-page">
    <div class="form">
      <div class="logo-img" />

      <v-select
        :items="platformList"
        :label="$t('login_page.platform')"
        outlined
      />

      <ValidationObserver
        ref="observer"
      >
        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('login_page.username')"
          rules="required"
        >
          <v-text-field
            v-model="username"
            :label="$t('login_page.username')"
            outlined
            :error-messages="errors[0]"
            @keydown.enter.prevent="onSubmit"
          />
        </ValidationProvider>
      </ValidationObserver>

      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        :label="$t('login_page.password')"
        outlined
        @click:append="show = !show"
        @keydown.enter.prevent="onSubmit"
      />
      <v-checkbox
        v-model="isRememberMe"
        :label="$t('login_page.rememberMe')"
      />
      <v-btn
        class="submit-btn"
        color="primary"
        elevation="2"
        large
        block
        @click="onSubmit"
      >
        {{ $t('login_page.login') }}
      </v-btn>
    </div>

    <v-footer
      class="footer"
      padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        Copyright &copy; 2010-{{ new Date().getFullYear() }} Advantech Co., Ltd. All Right Reserved.
      </v-col>
    </v-footer>

    <NotifyDialog v-if="dialogShow" />
  </div>
</template>

<script>
import { localize } from 'vee-validate';
import { login } from '@/api/login';

import NotifyDialog from '@/components/dialog/notify';

export default {
  name: 'PageLogin',
  components: {
    NotifyDialog,
  },
  data() {
    return {
      isRememberMe: false,
      username: '',
      password: '',
      show: false,
      platformList: [],
      dialogShow: false,
    };
  },
  watch: {
    $versionData: {
      handler(val) {
        if (val) {
          this.setLanguage(val.serverLanguage);
          this.getPlatformList(val);
        }
      },
      immediate: true,
    },
  },
  created() {
    if (localStorage.wax_rememberMe) {
      this.username = localStorage.wax_account;
      this.isRememberMe = localStorage.wax_rememberMe;
    }
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
      localize(lang);
    },
    getPlatformList(obj) {
      const list = [
        { text: this.$t('platform.projectManagement'), value: 'Project Management' },
        { text: this.$t('platform.realtimeMonitoring'), value: 'Realtime Monitoring' },
        { text: this.$t('platform.draw'), value: 'Draw' },
      ];

      if (obj.saasInstalled) list.push({ text: this.$t('platform.saasComposer'), value: 'SaaS Composer' });
      if (obj.grafanaInstalled) list.push({ text: this.$t('platform.wisePaasDashboard'), value: 'WISE-PaaS Dashboard' });

      this.platformList = list;
    },
    saveLocalStorage() {
      if (this.isRememberMe) {
        localStorage.wax_account = this.account;
        localStorage.wax_rememberMe = true;
      } else {
        localStorage.wax_account = '';
        localStorage.wax_rememberMe = false;
      }
    },
    onSubmit() {
      this.$refs.observer.validate().then((result) => {
        if (!result) return;

        if (this.password === '') this.dialogShow = true;

        this.saveLocalStorage();

        login({ username: this.username, password: this.password }).then((res) => {
          if (res.data.error === 0) {
            this.$router.push({ name: 'projectlist' });
          } else {
          // notify
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  position: relative;
  height: 100vh;
  min-height: 768px;
  overflow-y: auto;
  background-image: linear-gradient(rgb(27, 54, 104),rgb(37, 81, 117), rgb(27, 97, 97));

  .form {
    width: 400px;
    height: 540px;
    padding: 30px 20px;
    border-radius: 6px;
    border: 1px solid rgba(0,0,0,.3);
    background: rgb(245, 245, 245);
    box-shadow: 0 0 10px 10px rgba(0,0,0,.15);
    position: absolute;
    top: calc((100% - 500px)/2 - 80px);
    left: calc((100% - 400px)/2);
  }

  .logo-img {
    background: rgb(105, 111, 131);
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
  }

  .submit-btn { margin-top: 20px; }

  .footer {
   position: absolute;
   bottom: 0;
   width: 100%;
   font-size: 12px;
   background: transparent;
   color: rgba(255,255,255,.5)
 }
}

</style>
