<script>
export default {
  data() {
    return {
      isSelect: false,
      rama: '',
      asiitems: [
        'Grado en Clásicos',
        'Grado en ingles',
        'Grado en Bellas Artes',
        'Grado en Historia',
        'Grado en Historia del Arte',
        'Grado en Lenguas Modernas',
        'Grado en Filosofía',
        'Grado en Español'
      ],
      firstDivColor: 'rgb(160, 25, 52)',
      secondDivColor: 'rgb(65, 57, 57)'
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

    changeColor(divNumber) {
      if (divNumber === 1) {
        this.firstDivColor = 'rgb(160, 25, 52)'
        this.secondDivColor = 'rgb(65, 57, 57)'
      } else if (divNumber === 2) {
        this.firstDivColor = 'rgb(65, 57, 57)'
        this.secondDivColor = 'rgb(160, 25, 52)'
      }
    }
  }
}
</script>

<template>
  <div class="filter">
    <div class="filter-without temps">
      <div class="title">Filter</div>
      <div class="item">
        <v-select
          label="Temática"
          :items="['Grado', 'Master', 'Doctor']"
          variant="underlined"
        ></v-select>
        <v-select
          label="Rama"
          :items="[
            'Artes y Humanidades',
            'Ingeniería y Arquitectura',
            'Ciencias de la Salud',
            'Ciencias',
            'Ciencias Sociales y Jurídicas'
          ]"
          variant="underlined"
        ></v-select>
        <v-select label="Asignatura" :items="asiitems" variant="underlined"></v-select>
      </div>
    </div>
    <div class="filter-block temps">
      <div class="title">Orden</div>
      <div class="item">
        <div v-bind:style="{ color: firstDivColor }" v-on:click="changeColor(1)">
          De primero a final
        </div>
        <div v-bind:style="{ color: secondDivColor }" v-on:click="changeColor(2)">
          De final a primero
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

.red {
  color: rgb(160, 25, 52);
}
</style>
