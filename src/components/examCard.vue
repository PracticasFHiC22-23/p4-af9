<script>
export default {
  data() {
    return { panel: [0, 1] }
  },

  methods: {
    onClick() {
      this.$emit('custom-event', '事件参数')
    }
  }
}
</script>

<template>
  <div class="book-card">
    <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>1r Curs</v-expansion-panel-title>
        <v-expansion-panel-text style="display: flex; justify-content: space-between">
          <v-row justify="space-between" no-gutters>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                alt=""
                width="100"
                style="margin-top: 12px"
              />
              <div class="exam-title">PROGRAMACIÓ I</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                alt=""
                width="100"
                style="margin-top: 12px"
              />
              <div class="exam-title">PROGRAMACIÓ I</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                alt=""
                width="100"
                style="margin-top: 12px"
              />
              <div class="exam-title">PROGRAMACIÓ I</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                alt=""
                width="100"
                style="margin-top: 12px"
              />
              <div class="exam-title">PROGRAMACIÓ I</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                alt=""
                width="100"
                style="margin-top: 12px"
              />
              <div class="exam-title">PROGRAMACIÓ I</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center"
              @click="onClick"
            >
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                alt=""
                width="100"
                style="margin-top: 12px"
              />
              <div class="exam-title">PROGRAMACIÓ I</div>
            </div>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.book-card {
  display: flex;
  justify-self: start;
  width: 50%;
  margin-bottom: 30px;
}

.exam-title {
  font-size: 12px;
  font-weight: 600;
  margin-top: 12px;
}
</style>
