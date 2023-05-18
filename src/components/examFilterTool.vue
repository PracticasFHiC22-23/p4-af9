<script>
export default {
  data() {
    return { value: [1980, 2023] }
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
  <div class="filter">
    <div class="filter-without temps">
      <div class="title">Filter</div>
      <div class="item">
        <v-select label="tematica" :items="['grau', 'master']" variant="underlined"></v-select>
        <v-select
          label="Branch"
          :items="['Arte', 'Ciencia de natural', 'Ciencie de social', 'Dret', 'Lengua']"
          variant="underlined"
        ></v-select>
        <v-select
          label="Assignatura"
          :items="['CÀLCUL', 'DISSENY DIGITAL BÀSIC', '	PROGRAMACIÓ I']"
          variant="underlined"
        ></v-select>
      </div>
    </div>
    <div class="filter-block temps">
      <div class="title">orden</div>
      <div class="item">
        <div>de grande a pequeño</div>
        <div>De pequeño a grande</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  width: 70%;
  margin-top: 40px;
  margin-left: 50px;
}

.filter-block {
  border-bottom: 1px solid rgb(170, 170, 170);
  padding-bottom: 12px;
  padding-left: 6px;
  margin-bottom: 30px;
}

.filter-without {
  padding-bottom: 12px;
  padding-left: 6px;
}

.title {
  font-size: 16px;
  color: rgb(160, 25, 52);
}

.item div {
  font-size: 16px;
  color: rgb(65, 57, 57);
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.item div:hover {
  font-size: 17px;
  color: rgb(160, 25, 52);
}
</style>
