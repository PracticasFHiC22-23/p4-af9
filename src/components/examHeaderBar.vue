<script>
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
    },

    onSearch(e) {
      if (e.keyCode == '13') {
        this.onClick()
      }
    },

    gotoIndex() {
      this.$router.push({ path: '/' })
    },
    gotoExam() {
      this.$router.push({ path: '/exam' })
    },
    gotoBook() {
      this.$router.push({ path: '/book' })
    },
    gotoRoom() {
      this.$router.push({ path: '/room' })
    }
  }
}
</script>

<template>
  <header>
    <v-card style="height: 120px; display: fixed">
      <v-layout
        color="primary"
        prominent
        flat="true"
        rounded="false"
        style="padding-top: 20px; display: flex; align-items: center"
      >
        <img
          width="160"
          style="margin-left: 30px; cursor: pointer"
          src="https://upload.wikimedia.org/wikipedia/ca/thumb/2/2c/Logotip_UB.svg/1920px-Logotip_UB.svg.png?20151126150328"
          @click="gotoIndex"
        />

        <div style="width: 50%; margin-left: 40px">
          <v-card class="mx-auto rounded-pill" max-width="680">
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Designing in Vue"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
              @keydown="onSearch"
            ></v-text-field>
          </v-card>
        </div>

        <v-spacer></v-spacer>

        <v-btn variant="plain" class="text-none" :ripple="false" @click="gotoBook()">
          Llibres
        </v-btn>
        <v-btn variant="plain" class="text-none" :ripple="false" @click="gotoRoom()"> Salas </v-btn>
        <v-btn variant="text" icon="mdi-dots-grid"></v-btn>

        <v-btn variant="text" icon="mdi-account"></v-btn>
      </v-layout>
      <v-card-title style="margin-left: 20px; color: #757575; font-size: 18px">
        <span class="mdi mdi-note-edit-outline"> </span> Examenes
      </v-card-title>
    </v-card>
  </header>
</template>

<style scoped></style>
