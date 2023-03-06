<template>
    

<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          :src="require('../../assets/super2021.png')"
          transition="scale-transition"
          width="140"
        />

        <h1>Super2021</h1>
      </div>

      <v-spacer></v-spacer>
      <router-link :to="{path:'login'}">
      <v-btn
        text
      >
        <span class="mr-2">Login</span>

      </v-btn>
      </router-link>

      <router-link :to="{path:'/'}">
      <v-btn
        text
      >
        <span class="mr-2">Home</span>

      </v-btn>
      </router-link>
      <v-btn
        href="https://github.com/BUAA-GoodBro2021"
        target="_blank"
        text
      >
        <span class="mr-2">Contact Us
        </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>
    
<script>
export default {
  name: 'Navbar'
}
</script>