<script>
export default {
  data() {
    return {
      isColorChanged: false,
      originalColor: ''
    }
  },

  props: {
    img: String,
    type: String,
    title: String,
    author: String,
    info: String,
    descriptions: String
  },

  methods: {
    onClick() {
      this.$emit('custom-event', '事件参数')
    },
    toggleColor() {
      this.isColorChanged = !this.isColorChanged
    }
  }
}
</script>

<template>
  <div class="book-card" @click="onClick">
    <div class="book-img">
      <img :src="img" />
    </div>
    <div class="book-context">
      <div style="font-weight: 600; font-size: 16px; color: gray; margin-bottom: 14px">
        {{ type }}
      </div>
      <div style="font-size: 16px; color: rgb(54, 99, 126); font-weight: 600; margin-bottom: 7px">
        {{ title }}
      </div>
      <div style="color: gray; margin-bottom: 7px">{{ author }}</div>
      <div style="font-weight: 600; font-size: 14px; margin-bottom: 10px">
        <p>{{ info }}</p>
        <p>
          {{ descriptions }}
        </p>
      </div>
      <div class="types">
        <v-chip variant="elevated" color="#a41243"> Ciencia </v-chip>
        <v-chip variant="elevated" color="#238536" style="margin-left: 7px"> Informatica </v-chip>
        <v-chip variant="elevated" color="#976e41" style="margin-left: 7px"> Disseny </v-chip>
        <v-chip variant="elevated" color="#314357" style="margin-left: 7px"> Nuevo </v-chip>
      </div>

      <div class="card-action">
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon="mdi-share-variant-outline"
          size="small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon="mdi-email-arrow-right-outline"
          size="small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon=" mdi-note-edit-outline"
          size="small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon=" mdi-heart-outline"
          size="small"
          :class="{ changed: isColorChanged }"
          @click="toggleColor"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon="mdi-dots-horizontal"
          size="small"
        ></v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  display: flex;
  justify-self: start;
  height: 180px;
  width: 60%;
  margin-bottom: 30px;
}

.book-card:hover {
  cursor: pointer;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
}

.book-img {
  height: 100%;
}

img {
  height: 100%;
}

.book-context {
  width: 100%;
  position: relative;
  margin-top: 7px;
  margin-left: 10px;
}

.card-action {
  position: absolute;
  top: 0;
  right: 0;
}

.card-action v-btn {
  margin-top: 0px;
  margin-left: 0px;
}

.changed {
  color: red;
}
</style>
