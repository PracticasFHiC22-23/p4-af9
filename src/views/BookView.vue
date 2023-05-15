<script lang="ts">
import searchHeaderBar from '../components/searchHeaderBar.vue'
import bookFilterTool from '../components/bookFilterTool.vue'
import bookCard from '../components/bookCard.vue'
import paginationBar from '../components/paginationBar.vue'

export default {
  data() {
    return {
      search: '',
      loaded: false,
      loading: false,
      page: 1
    }
  },

  methods: {},

  components: {
    searchHeaderBar,
    bookFilterTool,
    bookCard,
    paginationBar
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
        <bookCard />
        <bookCard />
        <bookCard />
        <bookCard />
        <bookCard />
        <bookCard />
        <bookCard />
        <bookCard />
      </div>
      <div>
        <paginationBar />
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
}

.card-list {
  margin-top: 40px;
  margin-left: 20px;
  width: 100%;
}
</style>
