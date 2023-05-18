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
    <div class="filter-block temps">
      <div class="title">Horaris</div>
      <div class="item">
        <div>8 a 20 h</div>
        <div>8.30 a 20.30 h</div>
        <div>9.30 a 20.30 h</div>
        <div>especial</div>
      </div>
    </div>
    <div class="filter-block temps">
      <div class="title">Cualquier momento</div>
      <div class="item">
        <div>dilluns a divendres</div>
        <div>caps de setmana i festius</div>
        <div>Període d'exàmens</div>
      </div>
    </div>
    <div class="filter-block temps">
      <div class="title">Estats</div>
      <div class="item">
        <div>public</div>
        <div>privat</div>
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
