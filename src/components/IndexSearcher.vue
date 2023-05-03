<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<template>
  <v-card-text>
    <v-text-field
      :loading="loading"
      density="compact"
      variant="solo"
      label="Search templates"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="onClick"
    ></v-text-field>
  </v-card-text>
</template>
