<script>
export default {
  data() {
    return { value: [1980, 2023] }
  },

  methods: {
    onClick() {
      this.$emit('custom-event', '事件参数')
    }
  }
}
</script>

<template>
  <div class="book-card" @click="onClick">
    <div class="book-img">
      <img src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg" />
    </div>
    <div class="book-context">
      <div style="font-weight: 600; font-size: 16px; color: gray; margin-bottom: 7px">Llibre</div>
      <div style="font-size: 16px; color: rgb(54, 99, 126); font-weight: 600; margin-bottom: 7px">
        CS (Universidad Iccsi. Facultad de Derecho y Ciencias) CS.Uni
      </div>
      <div style="color: gray; margin-bottom: 7px">vening, Martin.</div>
      <div style="font-weight: 600; font-size: 14px; margin-bottom: 10px">
        <p>hysical review letters, 2019, Vol.122(10), p.103001-103001</p>
        <p>
          Ultralong-range Rydberg trimer molecules are spectrosocpila obereved in aultracoid gas of
          Cs(nd_3/2)
        </p>
      </div>
      <div class="types">
        <v-chip variant="elevated" color="#a23759"> Type1 </v-chip>
        <v-chip variant="elevated" color="#b23759" style="margin-left: 7px"> Type2 </v-chip>
        <v-chip variant="elevated" color="#123759" style="margin-left: 7px"> Type3 </v-chip>
        <v-chip variant="elevated" color="#823759" style="margin-left: 7px"> Type4 </v-chip>
      </div>

      <div class="card-action">
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon="mdi-share-variant-outline"
          size="x-small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon="mdi-email-arrow-right-outline"
          size="x-small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon=" mdi-note-edit-outline"
          size="x-small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon=" mdi-heart-outline"
          size="x-small"
        ></v-btn>
        <v-btn
          class="ma-2 mt-0 ml-0"
          variant="text"
          icon="mdi-dots-horizontal"
          size="x-small"
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
  width: 74%;
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
</style>
