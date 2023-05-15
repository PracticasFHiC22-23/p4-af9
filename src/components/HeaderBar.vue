<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

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

          <v-btn variant="plain" class="text-none" :ripple="false"> Examenes </v-btn>

          <v-btn variant="plain" class="text-none" :ripple="false"> Libres </v-btn>

          <v-btn variant="plain" class="text-none" :ripple="false"> Sales </v-btn>

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
