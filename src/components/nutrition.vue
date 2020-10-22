<template>
  <v-container>
    <v-row>
      <v-col>
       <v-row class="main-wrapper__header">
          <v-col md="3"> </v-col>
          <v-col cols="12" md="6" style="position: relative">
            <v-text-field
              id="f-name"
              v-model="name"
              class="darktxtfield__light gen2-search__field"
              label="Enter fruit/recipe name..."
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
        v-for="n in nutrition"
        :key="n.food.foodId"
      >
        <v-img :src="n.food.image" width="300px" height="300px"></v-img>
        <v-card-title> {{ n.food.label }}</v-card-title>
        <v-card-text class="text-wrap">
          <h3>NUTRIENTS</h3>
          <p
            v-for="(item,key, index) of n.food.nutrients"
            :key="index"
          >
           {{key}}-{{ item }}
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
    appId: "4b2c10a2",
    apiKey: "e39a9071b47883789ca4430651eeb531",
    nutrition: [],
    name: "",
  }),
  methods: {
    fetchData(name) {
      axios
        .get(
          `https://api.edamam.com/api/food-database/v2/parser?ingr=${name}&app_id=${this.appId}&app_key=${this.apiKey}`,
          
        )
        .then((response) => {
          console.log(response.data);
          this.nutrition = response.data.hints;
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