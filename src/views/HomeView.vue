<script lang="ts">
import homeHeaderBar from '../components/homeHeaderBar.vue'

export default {
  data() {
    return {
      search: '',
      loaded: false,
      loading: false
    }
  },

  methods: {
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
        this.$router.push({ path: '/book' })
      }, 2000)
    },

    onSearch(e) {
      if (e.keyCode == '13') {
        this.onClick()
      }
    }
  },

  components: {
    homeHeaderBar
  }
}
</script>

<template>
  <homeHeaderBar />

  <div class="main">
    <v-img
      :width="430"
      class="mx-auto mt-16 mb-16"
      aspect-ratio="16/9"
      cover
      src="https://upload.wikimedia.org/wikipedia/ca/thumb/2/2c/Logotip_UB.svg/1920px-Logotip_UB.svg.png?20151126150328"
    ></v-img>

    <v-card class="mx-auto rounded-pill" max-width="680">
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Libros, revistas, artículos..."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
        @keydown="onSearch"
      ></v-text-field>
    </v-card>

    <v-item-group class="d-flex justify-center mt-16 mb-16">
      <v-item>
        <v-col cols="auto" class="d-flex flex-column align-center justify-center">
          <v-btn icon="mdi-plus" variant="tonal" size="x-large"></v-btn>
          <div class="mt-3" style="color: #757575; font-size: 12px">Añadir favoritos</div>
        </v-col>
      </v-item>
    </v-item-group>
  </div>
</template>

<style scoped>
.main {
  height: 80vh;
  width: 100%;
}
</style>
