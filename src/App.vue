<template>
  <v-app>
    <Appbar></Appbar>
    <router-view></router-view>
    <div class="container">
     
    </div>
  </v-app>
</template>

<script>

import Appbar from './components/Appbar.vue'

export default {
  name: 'App',

  components: {
    Appbar
  },

  data: () => ({
    //
  }),
  mounted (){
    
  }
};
</script>
