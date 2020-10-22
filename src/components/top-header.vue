<template>
    <v-container>
     <v-row class="navbar" :class="{dotted:$route.path !=='/'}">
      <v-col md="2">
        <v-img class="logo-header" src="../assets/LOGO-website.png"></v-img>
      </v-col>
      <v-col md="5"></v-col>
    
      <v-col md="5">
        <v-row class="header-menu">
          <v-col md="6" sm="12" class=" point" @click="$router.push('/')"> Home</v-col>
          <v-col md="6" sm="12" class=" point" @click="$router.push('/register')"> Register </v-col>
        </v-row>
      </v-col>
      
    </v-row>
    </v-container>
</template>
<style>
.dotted {
  border-bottom: 1px dashed green
}
</style>