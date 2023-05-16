<template>
  <div class="simple-example">
    <vue-meeting-selector
      class="simple-example__meeting-selector"
      :date="date"
      :loading="loading"
      :class-names="classNames"
      :meetings-days="meetingsDays"
      v-model="meeting"
      @next-date="nextDate"
      @previous-date="previousDate"
    />
    <p>meeting Selected: {{ meeting ? meeting : 'No Meeting selected' }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

import VueMeetingSelector from '../../node_modules/vue-meeting-selector/dist/vue-meeting-selector.mjs'
import slotsGenerator from '../../node_modules/vue-meeting-selector/src/helpers/slotsGenerator'

import MeetingsDay from '../../node_modules/vue-meeting-selector/src/interfaces/MeetingsDay.interface'
import MeetingSlot from '../../node_modules/vue-meeting-selector/src/interfaces/MeetingSlot.interface'
import CalendarOptions from '../../node_modules/vue-meeting-selector/src/interfaces/CalendarOptions.interface'


export default defineComponent({
  name: 'SimpleExample',
  components: {
    VueMeetingSelector
  },
  setup() {
    const date = ref(new Date())
    const meetingsDays = ref<MeetingsDay | null>(null)
    const meeting = ref<MeetingSlot | null>(null)
    const loading = ref(true)

    const nbDaysToDisplay = computed(() => 5)

    const classNames = computed(() => ({
      tabLoading: 'loading-div'
    }))

    const slotsGeneratorAsync = (
      d, // date
      n,
      start,
      end,
      timesBetween
    ) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(slotsGenerator(d, n, start, end, timesBetween))
        }, 1000)
      })

    const nextDate = async () => {
      loading.value = true
      const start = {
        hours: 9,
        minutes: 0
      }
      const end = {
        hours: 20,
        minutes: 0
      }
      const dateCopy = new Date(date.value)
      const newDate = new Date(dateCopy.setDate(dateCopy.getDate() + 7))
      date.value = newDate
      meetingsDays.value = await slotsGeneratorAsync(newDate, nbDaysToDisplay.value, start, end, 60)
      loading.value = false
    }

    const previousDate = async () => {
      loading.value = true
      const start = {
        hours: 9,
        minutes: 0
      }
      const end = {
        hours: 20,
        minutes: 0
      }
      const dateCopy = new Date(date.value)
      dateCopy.setDate(dateCopy.getDate() - 7)
      const formatingDate = (dateToFormat) => {
        const d = new Date(dateToFormat)
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
        const year = d.getFullYear()
        return `${year}-${month}-${day}`
      }
      const newDate =
        formatingDate(new Date()) >= formatingDate(dateCopy) ? new Date() : new Date(dateCopy)
      date.value = newDate
      meetingsDays.value = await slotsGeneratorAsync(newDate, nbDaysToDisplay.value, start, end, 60)
      loading.value = false
    }

    onMounted(async () => {
      const start = {
        hours: 9,
        minutes: 0
      }
      const end = {
        hours: 20,
        minutes: 0
      }
      meetingsDays.value = await slotsGeneratorAsync(
        date.value,
        nbDaysToDisplay.value,
        start,
        end,
        60
      )
      loading.value = false
    })

    return {
      date,
      meetingsDays,
      loading,
      nbDaysToDisplay,
      classNames,
      meeting,
      nextDate,
      previousDate
    }
  }
})
</script>

<style scoped lang="scss">
.simple-example {
  &__meeting-selector {
    width: 700px;
  }
}
// since our scss is scoped we need to use ::v-deep
:deep(.loading-div) {
  top: 58px !important;
}
</style>
