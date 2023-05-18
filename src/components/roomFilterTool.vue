<script>
export default {
  data() {
    return {
      qDivColor: 'rgb(65, 57, 57)',
      wDivColor: 'rgb(65, 57, 57)',
      eDivColor: 'rgb(65, 57, 57)',
      fDivColor: 'rgb(65, 57, 57)',

      wwDivColor: 'rgb(65, 57, 57)',
      weDivColor: 'rgb(65, 57, 57)',
      wfDivColor: 'rgb(65, 57, 57)'
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

    changeColorOntemps(divNumber) {
      if (divNumber === 1) {
        this.qDivColor = 'rgb(160, 25, 52)'
        this.wDivColor = 'rgb(65, 57, 57)'
        this.eDivColor = 'rgb(65, 57, 57)'
        this.fDivColor = 'rgb(65, 57, 57)'
      } else if (divNumber === 2) {
        this.qDivColor = 'rgb(65, 57, 57)'
        this.wDivColor = 'rgb(160, 25, 52)'
        this.eDivColor = 'rgb(65, 57, 57)'
        this.fDivColor = 'rgb(65, 57, 57)'
      } else if (divNumber === 3) {
        this.qDivColor = 'rgb(65, 57, 57)'
        this.wDivColor = 'rgb(65, 57, 57)'
        this.eDivColor = 'rgb(160, 25, 52)'
        this.fDivColor = 'rgb(65, 57, 57)'
      } else if (divNumber === 4) {
        this.qDivColor = 'rgb(65, 57, 57)'
        this.wDivColor = 'rgb(65, 57, 57)'
        this.eDivColor = 'rgb(65, 57, 57)'
        this.fDivColor = 'rgb(160, 25, 52)'
      }
    },

    changeColorMoment(divNumber) {
      if (divNumber === 1) {
        this.wqDivColor = 'rgb(160, 25, 52)'
        this.wwDivColor = 'rgb(65, 57, 57)'
        this.weDivColor = 'rgb(65, 57, 57)'
      } else if (divNumber === 2) {
        this.wqDivColor = 'rgb(65, 57, 57)'
        this.wwDivColor = 'rgb(160, 25, 52)'
        this.weDivColor = 'rgb(65, 57, 57)'
      } else if (divNumber === 3) {
        this.wqDivColor = 'rgb(65, 57, 57)'
        this.wwDivColor = 'rgb(65, 57, 57)'
        this.weDivColor = 'rgb(160, 25, 52)'
      }
    }
  }
}
</script>

<template>
  <div class="filter">
    <div class="filter-block temps">
      <div class="title">Horaris</div>
      <div class="item">
        <div v-bind:style="{ color: qDivColor }" v-on:click="changeColorOntemps(1)">8 a 20 h</div>
        <div v-bind:style="{ color: wDivColor }" v-on:click="changeColorOntemps(2)">
          8.30 a 20.30 h
        </div>
        <div v-bind:style="{ color: eDivColor }" v-on:click="changeColorOntemps(3)">
          9.30 a 20.30 h
        </div>
        <div v-bind:style="{ color: rDivColor }" v-on:click="changeColorOntemps(4)">Especial</div>
      </div>
    </div>
    <div class="filter-block temps">
      <div class="title">Cualquier momento</div>
      <div class="item">
        <div v-bind:style="{ color: wqDivColor }" v-on:click="changeColorMoment(1)">
          Lunes a Viernes
        </div>
        <div v-bind:style="{ color: wwDivColor }" v-on:click="changeColorMoment(2)">
          Fines de Semana y Festivos
        </div>
        <div v-bind:style="{ color: weDivColor }" v-on:click="changeColorMoment(3)">
          Periodo de Exámenes
        </div>
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
