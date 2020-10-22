<template>
  <v-app>
    <v-main>
      <top-header/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import topHeader from './components/top-header';

export default {
  name: 'App',

  components: {
    topHeader,
  },

  data: () => ({
    //
  }),
};
</script>
