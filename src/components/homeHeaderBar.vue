<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  methods: {
    gotoExam() {
      this.$router.push({ path: '/exam' })
    },
    gotoBook() {
      this.$router.push({ path: '/book' })
    },
    gotoRoom() {
      this.$router.push({ path: '/room' })
    }
  },

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<template>
  <header>
    <v-card>
      <v-layout>
        <v-app-bar color="primary" prominent flat="true">
          <v-spacer></v-spacer>

          <v-btn variant="plain" class="text-none" :ripple="false" @click="gotoExam()">
            Examenes
          </v-btn>

          <v-btn variant="plain" class="text-none" :ripple="false" @click="gotoBook()">
            Llibres
          </v-btn>

          <v-btn variant="plain" class="text-none" :ripple="false" @click="gotoRoom()">
            Sales
          </v-btn>

          <v-btn icon="mdi-dots-grid"></v-btn>

          <v-btn variant="text" icon="mdi-account"></v-btn>
        </v-app-bar>
      </v-layout>
    </v-card>
  </header>
</template>

<style scoped>
header {
  height: 10vh;
}
</style>
