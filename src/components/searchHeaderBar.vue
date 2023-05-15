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
    }
  }
}
</script>

<template>
  <header>
    <v-card style="height: 140px">
      <v-layout style="height: 65%">
        <v-app-bar color="primary" prominent flat="true" rounded="false" style="padding-top: 20px">
          <img
            width="160"
            style="margin-left: 30px"
            src="https://upload.wikimedia.org/wikipedia/ca/thumb/2/2c/Logotip_UB.svg/1920px-Logotip_UB.svg.png?20151126150328"
          />

          <div style="width: 50%; margin-left: 40px">
            <v-card class="mx-auto rounded-pill" max-width="680">
              <v-autocomplete
                :loading="loading"
                hide-no-data
                density="compact"
                variant="solo"
                label="Designing in Vue"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                @click:append-inner="onClick"
                autocomplete="on"
              ></v-autocomplete>
            </v-card>
          </div>

          <v-spacer></v-spacer>

          <v-btn icon="mdi-dots-grid"></v-btn>

          <v-btn variant="text" icon="mdi-account"></v-btn>
        </v-app-bar>
      </v-layout>
      <v-card-title style="margin-left: 20px; color: #757575; font-size: 18px">
        <span class="mdi mdi-school-outline"></span> Articulos
      </v-card-title>
    </v-card>
  </header>
</template>

<style scoped></style>
