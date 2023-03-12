<template>
  <v-app>
    
    <navbar></navbar>
    
      <router-view/>
    
  </v-app>
</template>

<script>
import Navbar from './components/Starting/Navbar.vue'
export default {
  name: 'App',
  components: {
    navbar: Navbar,
  },
}
</script>
