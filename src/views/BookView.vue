<script lang="ts">
import searchHeaderBar from '../components/searchHeaderBar.vue'
import bookFilterTool from '../components/bookFilterTool.vue'

export default {
  data() {
    return {
      search: '',
      loaded: false,
      loading: false
    }
  },

  methods: {},

  components: {
    searchHeaderBar,
    bookFilterTool
  }
}
</script>

<template>
  <searchHeaderBar />

  <div class="main">
    <div class="filtering">
      <bookFilterTool />
    </div>
    <div class="context">
      <div class="card-list">
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
}

.filtering {
  width: 18%;
}

.context {
  width: 82%;
  background-color: rosybrown;
}

.card-list {
  margin-top: 40px;
  margin-left: 20px;
  background-color: cyan;
  width: 100%;
  height: 100%;
}
</style>
