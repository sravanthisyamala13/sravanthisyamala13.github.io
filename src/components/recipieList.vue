<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="align-center">
        <v-img  class="header-gif" height="200" width="200"  src="../assets/giphy.gif"></v-img>
      </v-col>
      <v-col>
        <v-row class="main-wrapper__header">
          <v-col md="3"> </v-col>
          <v-col cols="12" md="6" style="position: relative">
            <v-text-field
              id="f-name"
              v-model="name"
              class="darktxtfield__light gen2-search__field"
              label="Recipe made of eg:chicken..."
            ></v-text-field>
            <v-icon class="search" @click="fetchData(name)">mdi-magnify</v-icon>
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        md="4"
        class="mx-auto my-12"
        width="374"
        v-for="recipie in recipies"
        :key="recipie.recipe.label"
      >
        <v-img :src="recipie.recipe.image" width="300px" height="300px"></v-img>
        <v-card-title> {{ recipie.recipe.label }}</v-card-title>
        <v-card-text class="text-wrap">
          <h3>Ingredients</h3>
          <p
            v-for="(item, index) of recipie.recipe.ingredientLines"
            :key="index"
          >
            {{ item }}
          </p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    appId: "95bc8ebb",
    apiKey: "3db8ba4ba66987cc8532d316e8313a53",
    recipies: [],
    name: "",
  }),
  methods: {
    fetchData(name) {
      axios
        .get(
          `https://api.edamam.com/search?q=${name}&app_id=${this.appId}&app_key=${this.apiKey}`
        )
        .then((response) => {
          console.log(response.data);
          this.recipies = response.data.hits;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.mdi-magnify {
  position: absolute !important;
  right: 20px;
  top: 30px;
}
.header-gif {
   margin:0 auto;
.v-image__image{
 background-size:200px
}
}
</style>