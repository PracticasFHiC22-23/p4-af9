<script lang="ts">
import searchHeaderBar from '../components/searchHeaderBar.vue'

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
      }, 2000)
    }
  },

  components: {
    searchHeaderBar
  }
}
</script>

<template>
  <searchHeaderBar />

  <div class="about">
    <h1>THIS PAGE THIS FOR BOOK</h1>
  </div>
</template>

<style scoped></style>
