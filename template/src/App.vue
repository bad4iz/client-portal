<template>
  <div id="app">
    <v-header></v-header>
     <v-container grid-list-md>
       <v-layout row wrap>
          <v-flex xs2>
            <v-nav-drawer></v-nav-drawer>    
          </v-flex>
          <v-flex xs10 >
            <img src="./assets/logo.png">
            <router-view/>
          </v-flex>
       </v-layout>
     </v-container>
  
  </div>
</template>

<script>
import VHeader from '@/components/mainComponents/header';
import VNavDrawer from '@/components/mainComponents/navDrawer';

export default {
  name: 'app',
  components: {
    VHeader,
    VNavDrawer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
