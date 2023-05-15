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
      page: 1,
      display: false,
      isFixed: false
    }
  },

  methods: {
    handleEvent() {
      this.display = !this.display
    },

    toggleFixed(value) {
      this.isFixed = value
    },

    handleScroll() {
      if (window.pageYOffset > 100) {
        this.toggleFixed(true)
      } else {
        this.toggleFixed(false)
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },

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
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
        <bookCard @custom-event="handleEvent" />
      </div>
      <div>
        <paginationBar />
      </div>

      <div :class="{ 'book-content': true, 'book-fixed': isFixed }" v-if="display"></div>
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
  position: relative;
}

.card-list {
  margin-top: 40px;
  margin-left: 20px;
  width: 100%;
}

.book-content {
  position: absolute;
  top: 0px;
  right: 0;
  width: 42%;
  height: 2400px;
  background-color: gray;
  overflow: auto;
}

.book-fixed {
  position: fixed;
  top: 100px;
  width: 34.5%;
}
</style>
