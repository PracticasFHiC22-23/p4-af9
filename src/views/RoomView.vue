<script lang="ts">
import searchHeaderBar from '../components/searchHeaderBar.vue'
import bookFilterTool from '../components/bookFilterTool.vue'

export default {
  data() {
    return {
      display: false,
      center: { lat: 41.3963242, lng: 2.1338434 },
      markers: [
        {
          id: 1,
          position: {
            lat: 41.381615,
            lng: 2.115648
          }
        },
        {
          id: 1,
          position: {
            lat: 41.386037,
            lng: 2.120218
          }
        },
        {
          id: 1,
          position: {
            lat: 41.346013,
            lng: 2.106643
          }
        },
        {
          id: 1,
          position: {
            lat: 41.389548,
            lng: 2.152161
          }
        },
        {
          id: 1,
          position: {
            lat: 41.438399,
            lng: 2.144717
          }
        },
        {
          id: 1,
          position: {
            lat: 41.38427,
            lng: 2.118968
          }
        },
        {
          id: 1,
          position: {
            lat: 41.3722102,
            lng: 2.1538077
          }
        },
        {
          id: 1,
          position: {
            lat: 41.385645,
            lng: 2.115395
          }
        },
        {
          id: 1,
          position: {
            lat: 41.384945,
            lng: 2.12131
          }
        },
        {
          id: 1,
          position: {
            lat: 41.383991,
            lng: 2.166903
          }
        },
        {
          id: 1,
          position: {
            lat: 41.384922,
            lng: 2.116396
          }
        },
        {
          id: 1,
          position: {
            lat: 41.386457,
            lng: 2.163853
          }
        },
        {
          id: 1,
          position: {
            lat: 41.381208,
            lng: 2.139126
          }
        },
        {
          id: 1,
          position: {
            lat: 41.386474,
            lng: 2.163729
          }
        },
        {
          id: 1,
          position: {
            lat: 41.386672,
            lng: 2.163866
          }
        },
        {
          id: 1,
          position: {
            lat: 41.430761,
            lng: 2.151091
          }
        }
      ]
    }
  },

  methods: {
    openWindow(id) {
      console.log(id)
      this.display = !this.display
    }
  },

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
      <div>
        <div
          style="
            font-weight: 600;
            font-size: 24px;
            color: rgb(107, 107, 107);
            margin-top: 40px;
            margin-bottom: 40px;
          "
        >
          Biblioteques i horaris
        </div>

        <GMapMap
          :center="center"
          :zoom="13"
          map-type-id="terrain"
          style="width: 60vw; height: 40rem"
        >
          <GMapCluster :zoomOnClick="true">
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="openWindow(m.id)"
            />
          </GMapCluster>
        </GMapMap>
      </div>

      <div>sdsdsds</div>
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
</style>
