<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/super2021.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Super2021!
        </h1>

        <h2 class="subheading font-weight-regular">
          <v-icon class="material-icons" >notes</v-icon>
          简简单单整个软工demo
          <br>
        </h2>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          助教哥哥们
        </h2>

        <v-row justify="center">

          <div
            v-for="(user, i) in assistants"
            :key="i"
            
            class="subheading mx-3"
            target="_blank"
          >
          
          <v-icon class="material-icons-outlined" :style="{color:user.color}">{{user.icon}}</v-icon>
            <a :href="user.href">{{ user.text }}</a>
          </div>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          一些前端资料
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    importantLinks: [
      {
        text: 'Vue.js',
        href: 'https://vuejs.org/guide/introduction.html'
      },
      {
        text: 'Vuetify组件库',
        href: 'https://vuetifyjs.com/en/getting-started/installation/'
      },
      {
        text: 'Material按钮库',
        href: 'https://fonts.google.com/icons?icon.set=Material+Icons'
      },
    ],
    assistants: [
      {
        text: '闫思桥巨佬',
        href: 'https://github.com/Cloud-Iris',
        icon: 'grade',
        color: 'blue'
      },
      {
        text: '周恩申帅哥',
        href: 'https://github.com/Zhoues',
        icon: 'lightbulb',
        color: 'yellow'
      },
      {
        text: '李昊大哥哥',
        href: 'https://github.com/LLLeoLi',
        icon: 'favorite',
        color: 'red'
      }
    ]
  })
}
</script>
