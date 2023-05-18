<script lang="ts">
import roomHeaderBar from '../components/roomHeaderBar.vue'
import bookFilterTool from '../components/roomFilterTool.vue'
import calendarTool from '../components/calendarTool.vue'
import { provide, ref } from 'vue'

export default {
  components: {
    roomHeaderBar,
    bookFilterTool,
    calendarTool
  },

  setup() {
    const message = ref('')

    // 提供数据给子组件
    const provideData = () => {
      message.value = 'Hello from parent!'
    }

    const display = ref(false)
    const knowledge = ref(33)
    const center = ref({ lat: 41.3963242, lng: 2.1338434 })
    const markers = ref([
      {
        id: 1,
        position: {
          lat: 41.381615,
          lng: 2.115648
        }
      },
      {
        id: 1,
        position: {
          lat: 41.386037,
          lng: 2.120218
        }
      },
      {
        id: 1,
        position: {
          lat: 41.346013,
          lng: 2.106643
        }
      },
      {
        id: 1,
        position: {
          lat: 41.389548,
          lng: 2.152161
        }
      },
      {
        id: 1,
        position: {
          lat: 41.438399,
          lng: 2.144717
        }
      },
      {
        id: 1,
        position: {
          lat: 41.38427,
          lng: 2.118968
        }
      },
      {
        id: 1,
        position: {
          lat: 41.3722102,
          lng: 2.1538077
        }
      },
      {
        id: 1,
        position: {
          lat: 41.385645,
          lng: 2.115395
        }
      },
      {
        id: 1,
        position: {
          lat: 41.384945,
          lng: 2.12131
        }
      },
      {
        id: 1,
        position: {
          lat: 41.383991,
          lng: 2.166903
        }
      },
      {
        id: 1,
        position: {
          lat: 41.384922,
          lng: 2.116396
        }
      },
      {
        id: 1,
        position: {
          lat: 41.386457,
          lng: 2.163853
        }
      },
      {
        id: 1,
        position: {
          lat: 41.381208,
          lng: 2.139126
        }
      },
      {
        id: 1,
        position: {
          lat: 41.386474,
          lng: 2.163729
        }
      },
      {
        id: 1,
        position: {
          lat: 41.386672,
          lng: 2.163866
        }
      },
      {
        id: 1,
        position: {
          lat: 41.430761,
          lng: 2.151091
        }
      }
    ])

    const openWindow = (id) => {
      console.log(id)
      display.value = !display.value
    }

    const handleChildMessage = ref(false)
    provide('handleChildMessage', handleChildMessage)

    const handleEvent = () => {
      console.log('tes!!!')
    }

    return {
      handleChildMessage,
      message,
      provideData,
      display,
      knowledge,
      center,
      markers,
      openWindow,
      handleEvent
    }
  }
}
</script>

<template>
  <roomHeaderBar />

  <div class="main">
    <div class="filtering">
      <bookFilterTool />
    </div>
    <div class="context">
      <div>
        <div
          style="
            font-weight: 600;
            font-size: 24px;
            color: rgb(107, 107, 107);
            margin-top: 40px;
            margin-bottom: 40px;
          "
        >
          Biblioteques i horaris
        </div>

        <GMapMap
          :center="center"
          :zoom="13"
          map-type-id="terrain"
          style="width: 60vw; height: 40rem"
        >
          <GMapCluster :zoomOnClick="true">
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="openWindow(m.id)"
            />
          </GMapCluster>
        </GMapMap>
      </div>

      <div style="margin-top: 30px" v-if="display">
        <div style="color: gray; font-weight: 600; font-size: 24px; margin-bottom: 20px">
          Detalles
        </div>

        <div style="display: flex">
          <div>
            <img src="https://crai.ub.edu/sites/default/files/imatges/mates.png" alt="" />
          </div>
          <div style="margin-left: 20px; width: 60%">
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 20px">
              Sales de treball del CRAI biblioteca de Matemàtiqeus i Informatica
            </div>
            <div>
              El CRAI Biblioteca de Matemáticas e Informática ofrece los fondos bibliográficos de
              apoyo a los programas docentes y de investigación de las enseñanzas impartidas en la
              Facultad: Matemáticas e Ingeniería Informática.
            </div>
            <div style="display: flex; flex-wrap: wrap; align-items: flex-start; margin-top: 20px">
              <v-btn prepend-icon="mdi-printer" stacked variant="text" style="width: 120px">
                imprmir
              </v-btn>
              <v-btn
                prepend-icon="mdi-note-edit-outline"
                stacked
                variant="text"
                style="width: 120px"
              >
                ENDNOTE
              </v-btn>
              <v-btn
                prepend-icon="mdi-share-variant-outline"
                stacked
                variant="text"
                style="width: 120px"
              >
                mendeley
              </v-btn>
              <v-btn
                prepend-icon=" mdi-file-export-outline"
                stacked
                variant="text"
                style="width: 120px"
              >
                export
              </v-btn>
            </div>
          </div>
        </div>

        <div
          style="
            display: flex;
            width: 80%;
            justify-content: center;
            margin-top: 40px;
            margin-bottom: 60px;
          "
        >
          <calendarTool />

          <v-dialog v-model="handleChildMessage" persistent width="auto">
            <v-card>
              <v-card-title class="text-h5"> Reserva Sala </v-card-title>
              <v-card-text>¿Estás seguro de que quieres hacer una cita para esta sala?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red-darken-1" variant="text" @click="handleChildMessage = false">
                  Cancel
                </v-btn>
                <v-btn color="green-darken-1" variant="text" @click="handleChildMessage = false">
                  Confirmar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>

      <div class="information" v-if="display">
        <div style="color: gray; font-size: 20px; margin-bottom: 20px; font-weight: 600">
          Informació
        </div>

        <div
          style="
            color: rgb(43, 43, 43);
            font-size: 16px;
            margin-bottom: 20px;
            font-weight: 600;
            margin-left: 12px;
          "
        >
          Sales de treball del CRAI Biblioteca de Matemàtiques i informtica
        </div>

        <div
          style="
            color: rgb(43, 43, 43);
            font-size: 16px;
            margin-bottom: 20px;
            font-weight: 600;
            margin-left: 12px;
          "
        >
          horario: 9:00 - 21:00
        </div>

        <div
          style="
            color: rgb(43, 43, 43);
            font-size: 16px;
            margin-bottom: 20px;
            font-weight: 600;
            margin-left: 12px;
          "
        >
          Direcció Avigunda granvia 535
        </div>

        <v-progress-linear v-model="knowledge" color="amber" height="25" style="margin-left: 12px">
          <strong>{{ Math.ceil(knowledge) }}%</strong>
        </v-progress-linear>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
}

.filtering {
  width: 18%;
}

.context {
  width: 82%;
  position: relative;
}

.information {
  position: absolute;
  top: 100px;
  right: 0;
  width: 20rem;
}
</style>
