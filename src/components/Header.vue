<template>
  <v-container>
    <vue-video-section
      id="header-background-video"
      :ref="'header-background-video'"
      :mp4Source="require('../assets/food.mp4')"
      :mobileBreakpoint="992"
      :desktopHeight="450"
      :mobileHeight="450"
      :playsinline="true"
      :loop="true"
      :autoplay="true"
      :autobuffer="true"
      :muted="true"
    >
    </vue-video-section>

    <v-row>
      <v-col md="6" class="menu" @click="$router.push('/recipies')">
        <v-img class="logo" src="../assets/source.gif"></v-img>
        <h2 class="text-center">Recepes</h2>
      </v-col>
      <v-col md="6" class="menu" @click="$router.push('/nutrition')">
        <v-img class="logo-anal" src="../assets/apple-81.gif"></v-img>
        <h2 class="text-center">Know your Nutrition</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        md="4"
        class="mx-auto my-12"
        v-for="recipie in recipies"
        :key="recipie.recipe.label"
      >
        <v-img :src="recipie.recipe.image" width="300px" height="300px"></v-img>
        <v-card-title> {{ recipie.recipe.label }}</v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    recipies: [],
  }),

  methods: {
    search() {
      window.scrollTo(0, 10000);
    },
  },
};
</script>
<style lang="scss" >
.vue-video-section-wrapper {
  background: #fff;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.recipie {
  position: absolute;
  color: #000;
  /* background: aliceblue; */
  /* margin: auto; */
  z-index: 99;
  top: 50%;
  left: 50%;
}

.logo .v-image__image {
  background-size: 300px 300px;
}
.logo-anl .v-image__image {
  background-size: 400px;
  background-position: center bottom;
}
.logo,
.logo-anal {
  height: 300px;
}
.menu {
  cursor: pointer;
}
.logo-header .v-image__image {
  background-position: left center !important;
  background-size: 140px;
}
.logo-header {
  height: 135px;
}
.header-menu {
  margin-top: 34px;
  color: #82aa53;
  font-weight: bold;
  font-size: 26px;
  .point {
    cursor: pointer;
  }
}
</style>
