<script lang="ts">
import searchHeaderBar from '../components/searchHeaderBar.vue'
import bookFilterTool from '../components/bookFilterTool.vue'
import bookCard from '../components/bookCard.vue'


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
    bookCard
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
        <div class="text-center">
          <v-container>
            <v-row justify="center">
              <v-col cols="8">
                <v-container class="max-width">
                  <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </div>
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
