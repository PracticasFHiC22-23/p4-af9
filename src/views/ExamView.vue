<script lang="ts">
import examHeaderBar from '../components/examHeaderBar.vue'
import examFilterTool from '../components/examFilterTool.vue'
import examCard from '../components/examCard.vue'
import examContent from '../components/examContent.vue'

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
      if (window.pageYOffset > 120) {
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
    examHeaderBar,
    examFilterTool,
    examCard,
    examContent
  }
}
</script>

<template>
  <examHeaderBar />

  <div class="main">
    <div class="filtering">
      <examFilterTool />
    </div>
    <div class="context">
      <div class="card-list">
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
        <examCard @custom-event="handleEvent" />
      </div>

      <div :class="{ 'book-content': true, 'book-fixed': isFixed }" v-if="display">
        <examContent />
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
  background-color: rgb(243, 243, 243);
  overflow: auto;
}

.book-fixed {
  position: fixed;
  top: 0px;
  width: 34.5%;
}
</style>
