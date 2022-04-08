<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      :width="width"
    >
      <v-card>
        <v-card-title class="text-h5">
          <v-icon
            color="blue lighten-2"
          >
            mdi-information
          </v-icon><span>{{ "Alert" }}</span>
        </v-card-title>
        <v-card-text>{{ message }}</v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            {{ $t('dialog.ok') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'NotifyDialog',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 500,
    },
  },
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
