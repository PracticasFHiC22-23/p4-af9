<script>
export default {
  data() {
    return {
      panel: [0, 1],
      exams: []
    }
  },

  props: {
    name: String,
    a1name: String,
    a1str: String,
    a2name: String,
    a2str: String,
    a3name: String,
    a3str: String,
    a4name: String,
    a4str: String,
    a5name: String,
    a5str: String
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
        <v-expansion-panel-title>{{ name }}</v-expansion-panel-title>
        <v-expansion-panel-text style="display: flex; justify-content: space-between">
          <v-row justify="space-between" no-gutters>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img :src="a1str" alt="" width="100" height="60" style="margin-top: 12px" />
              <div class="exam-title">{{ a1name }}</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img :src="a2str" width="100" height="60" style="margin-top: 12px" />
              <div class="exam-title">{{ a2name }}</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img :src="a3str" width="100" height="60" style="margin-top: 12px" />
              <div class="exam-title">{{ a3name }}</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img :src="a4str" width="100" height="60" style="margin-top: 12px" />
              <div class="exam-title">{{ a4name }}</div>
            </div>
            <div
              style="display: flex; flex-direction: column; align-items: center; cursor: pointer"
              @click="onClick"
            >
              <img :src="a5str" width="100" height="60" style="margin-top: 12px" />
              <div class="exam-title">{{ a5name }}</div>
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
