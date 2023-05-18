<script lang="ts">
import examHeaderBar from '../components/examHeaderBar.vue'
import examFilterTool from '../components/examFilterTool.vue'
import examCard from '../components/examCard.vue'
import examContent from '../components/examContent.vue'

export default {
  data() {
    return {
      search: '',
      loaded: false,
      loading: false,
      page: 1,
      display: false,
      isFixed: false
    }
  },

  methods: {
    handleEvent() {
      this.display = !this.display
    },

    toggleFixed(value) {
      this.isFixed = value
    },

    handleScroll() {
      if (window.pageYOffset > 120) {
        this.toggleFixed(true)
      } else {
        this.toggleFixed(false)
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  components: {
    examHeaderBar,
    examFilterTool,
    examCard,
    examContent
  }
}
</script>

<template>
  <examHeaderBar />

  <div class="main">
    <div class="filtering">
      <examFilterTool />
    </div>
    <div class="context">
      <div
        style="
          font-weight: 600;
          font-size: 24px;
          color: rgb(107, 107, 107);
          margin-top: 40px;
          margin-bottom: 40px;
          margin-left: 20px;
        "
      >
        Examenes i signatures
      </div>

      <div class="card-list">
        <examCard
          @custom-event="handleEvent"
          name="Primero curso - otoño"
          a1name="Fisica"
          a1str="https://concepto.de/wp-content/uploads/2018/08/f%C3%ADsica-e1534938830408-800x400.jpg"
          a2name="Disseny digital bàsic"
          a2str="https://www.edicions.ub.edu/portadas/thumbs3/06407.png"
          a3name="Introducció als ordinadors"
          a3str="https://image.slidesharecdn.com/hevolucidelordinador-091023142439-phpapp02/85/evoluci-del-ordinador-2-320.jpg?cb=1676648422"
          a4name="Programació I"
          a4str="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
          a5name="Càlcul"
          a5str="https://pixabay.com/static/uploads/photo/2012/11/09/07/44/binary-65473_640.jpg"
        />
        <examCard
          @custom-event="handleEvent"
          name="Primero curso - Primavera"
          a1name="Àlgebra"
          a1str="https://www.mejorconweb.com/images/programacion-web-barcelona.jpg"
          a2name="Matemàtica
        discreta"
          a2str="https://www.azuanet.com/web/common/modulos/noticias/imagenes/20181212175753000000.jpg"
          a3name="Algorísmica"
          a3str="https://cyberlinetechnologies.com/wp-content/uploads/2015/03/08.jpg"
          a4name="Estructura de dades"
          a4str="https://www.nextibs.com/wp-content/uploads/2021/12/seguridad-informatica-1024x439.jpeg"
          a5name="Programació II"
          a5str="https://thumbs.dreamstime.com/b/trabajo-de-programadores-gran-almacenamiento-datos-y-representaci%C3%B3n-computaci%C3%B3n-en-nube-c%C3%B3digo-programaci%C3%B3n-desarrollo-sitios-156815966.jpg"
        />
        <examCard
          @custom-event="handleEvent"
          name="Segundo curso - otoño"
          a1name="Probabilitats i estadística"
          a1str="https://www.electropolis.es/media/magefan_blog/2017/09/Psychiatric-Disorder-1.jpg"
          a2name="Empresa"
          a2str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHMPpik_4qUBppcGrny7UCpdshW0lnW08YxREyF2f9IzugLNUr96qmAzLRvXZ2r0QhdQ&usqp=CAU"
          a3name="Electrònica"
          a3str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYmo4V1oBmXLChuJctELhViEkq_rBGs730CAum_Dfdoe51Op8LQRUQm7kqmKJJ7fExQU&usqp=CAU"
          a4name="Sistemes operatius"
          a4str="https://electronicaonline.net/wp-content/uploads/2019/04/electronica-definicion.jpg"
          a5name="Fisica"
          a5str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPeh1tGBfCrVZ-KoiRqojJ3WvhLJ693BVXXG8o5GcHGAPua6TB4bbX22wiseGuyLW5ds&usqp=CAU"
        />
        <examCard
          @custom-event="handleEvent"
          name="Segundo curso - Primavera"
          a1name="computació científica"
          a1str="https://formawiki.diba.cat/pub/direccio_de_serveis/97e2099e_pautes_per_a_l_elaboracio_de_materials_de_difusio/docs/4165_conti_origi_direc_curs_paute_unita_3idees_disseny.jpg"
          a2name="Disseny de software"
          a2str="https://www.ub.edu/docenciacrai/sites/default/files/styles/medium/public/2022-11/9%20webs%20gratu%C3%AFtes%20%281%29.png?itok=5LhNiVl6"
          a3name="Estructura de computadors"
          a3str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6ra-5RQdkeGyfiQkLkR3X5n_Vq3Grbh6hwZ03Ec7x94pQ3JM3Ap9D-cAwsNerb5ercI&usqp=CAU"
          a4name="Integrat de software"
          a4str="data:image/jpeg;base64,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"
          a5name="arquitectures incrustades"
          a5str="https://www.logigrafic.com/wp-content/uploads/2016/01/disseny-grafic.jpg"
        />
        <examCard
          @custom-event="handleEvent"
          name="Tercero curso - otoño"
          a1name="Bases de dades"
          a1str="https://biblioteca.uva.es/export/sites/biblioteca/_imagenes/base-de-datos-300x171.jpg_1466044560.jpg"
          a2name="Gràfics i visualització de dades"
          a2str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgMJ8CeaD0eTP2wGb0IbVW76RwFPp2NTTLNGaRvs8SveQBbH4d8MnL_8Mq_Gtvbe8W-s&usqp=CAU"
          a3name="Intel•ligència artificial"
          a3str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLrcsUfYoJXPRyLzV2dZeo_SbaGvFzJHzRLJhaI-MAtCaz6-UyyLCAsVdbt58q6S5fQ4&usqp=CAU"
          a4name="Lògica i llenguatges"
          a4str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqRxI9pgEMZCp4XuB1A7OPpca39A05-uKHZps0RIRaUXBZKEhBemDuEXezc_BZ9b_1_A&usqp=CAU"
          a5name="Visió artificial"
          a5str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuY_2sILa8rsHYJcWQ-B0yikQq-sq9PSQyyfXQ705YPr_yvVZ_3bkKaER3IN_la23Cx0&usqp=CAU"
        />
        <examCard
          @custom-event="handleEvent"
          name="Tercero curso - Primavera"
          a1name="Sistemes operatius II"
          a1str="https://imatges.vilaweb.cat/antiga/wp-content/uploads/2022/11/066-16.jpg"
          a2name="Xarxes"
          a2str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWQGllS3XGH6NC8gmtNV5Df7ydTl31rLMP99cGH3ZsPK52aTc1DTM41GaAqp2HNtyK8o&usqp=CAU"
          a3name="Taller la informàtica"
          a3str="data:image/jpeg;base64,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"
          a4name="Factors humans i computació"
          a4str="https://moodle.insjoaquimmir.cat/pluginfile.php/58646/course/overviewfiles/images.jpg"
          a5name="Software distribuït"
          a5str="https://www.softzone.es/app/uploads/2017/07/linux-windows-1.jpg?x=634&y=309"
        />
        <examCard
          @custom-event="handleEvent"
          name="Cuarto curso - otoño"
          a1name="Software "
          a1str="https://www.areatecnologia.com/informatica/imagenes/que-es-software.jpg"
          a2name="Comptabilitat "
          a2str="https://www.internetizado.com/images/software_de_sistema_significado_funciones_ejemplos_y_caracteristicas/31770_1200x833.jpg"
          a3name="Geometria "
          a3str="https://vidabytes.com/wp-content/uploads/2021/09/como-funciona-el-kernel-software.jpg"
          a4name="Grafs"
          a4str="https://www.internetizado.com/images/software_de_sistema_significado_funciones_ejemplos_y_caracteristicas/31770_300x150.jpg"
          a5name="Aritmètica"
          a5str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToInAuPLwlAhsqpRYasVPxFpKXCGaIVIYSbFuOjUsyGb3GbuXJ6K4DWf1MsXQ7EwzA8D4&usqp=CAU"
        />
        <examCard
          @custom-event="handleEvent"
          name="Cuarto curso - Primavera"
          a1name="Ètica i legislació"
          a1str="https://ebooks.enfermeria21.com/images/609.jpg"
          a2name="Enginyeria del software"
          a2str="https://www.fuden.es/wp-content/uploads/2022/03/curso-etica-y-legislacion-salud-mental.png"
          a3name="Aprenentatge automàtic"
          a3str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjIfljfYq2qTGJRORG1oKTjtCTe_0HJVmSfYFHiV0eJl3d0Ng-1rTUSXqk71dQAp1ELk&usqp=CAU"
          a4name="Robòtica"
          a4str="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwxIVwUgbobbBcs6hzrLZtuXBHAW9bk4tZqfwpNLKxHPBXc65KfFmLc6M_8jHPj1aRDM&usqp=CAU"
          a5name="Software concurrent"
          a5str="https://scout.es/wp-content/uploads/2022/10/salud-menta-y-atractivo-768x524-1.jpg"
        />
      </div>

      <div :class="{ 'book-content': true, 'book-fixed': isFixed }" v-if="display">
        <examContent />
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

.card-list {
  margin-top: 40px;
  margin-left: 20px;
  width: 100%;
}

.book-content {
  position: absolute;
  top: 0px;
  right: 0;
  width: 42%;
  height: 2400px;
  background-color: rgb(243, 243, 243);
  overflow: auto;
}

.book-fixed {
  position: fixed;
  top: 0px;
  width: 34.5%;
}
</style>
