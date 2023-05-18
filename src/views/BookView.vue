<script lang="ts">
import searchHeaderBar from '../components/searchHeaderBar.vue'
import bookFilterTool from '../components/bookFilterTool.vue'
import bookCard from '../components/bookCard.vue'
import paginationBar from '../components/paginationBar.vue'
import bookContent from '../components/bookContent.vue'

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
    searchHeaderBar,
    bookFilterTool,
    bookCard,
    paginationBar,
    bookContent
  }
}
</script>

<template>
  <searchHeaderBar />

  <div class="main">
    <div class="filtering">
      <bookFilterTool />
    </div>
    <div class="context">
      <div class="card-list">
        <bookCard
          img="https://cercabib.ub.edu/discovery/img/icon_article.png"
          type="ARTICLE"
          title="[La(η-B)La] ( = 7-9): a new class of inverse sandwich complexes"
          author="Chen, Teng-Teng ; Li, Wan-Lu ; Li, Jun ; Wang, Lai-Sheng"
          info="Chemical science (Cambridge), 2019, Vol.1 (8), p.2534-2542"
          descriptions=".... Here we show that lanthanide-boron binary clusters, La 2 B x − , can form a new class of inverse-sandwich complexes, [Ln(η x -B x )Ln] − ( x = 7-9..."
          @custom-event="handleEvent"
        />
        <bookCard
          img="https://proxy-euf.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client=primo&isbn=3-95487-241-2/sc.jpg"
          type="LLIBRE"
          title="Bramón, Francisco,
Los sirgueros de la Virgen sin original pecado"
          author="Bramón, Francisco, author."
          info="Frankfurt am Main : Vervuert Verlagsgesellschaft, [2013]"
          descriptions="
Edición, por primera vez íntegra, de esta novela pastoril, una de las primeras en su género de la Nueva España,"
          @custom-event="handleEvent"
        />
        <bookCard
          img="https://proxy-euf.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client=primo&isbn=9780199236688/sc.jpg"
          type="LLIBRE"
          title="Vergil's Green Thoughts: Plants, Humans, and the Divine"
          author="Armstrong, Rebecca"
          info="Oxford: Oxford University Press, Incorporated"
          descriptions=""
          @custom-event="handleEvent"
        />
        <bookCard
          img="https://cercabib.ub.edu/discovery/img/icon_article.png"
          type="ARTICLE"
          title="“Yo la bomba no la bailé, la bomba yo la vivé” (I Didn’t Just Dance Bomba, I Lived It)"
          author="Bruno, Sarah"
          info="Arlington: Wiley Subscription Services, Inc"
          descriptions="Transforming anthropology, 2022, Vol.30 (2), p.93-106"
          @custom-event="handleEvent"
        />
        <bookCard
          img="https://proxy-euf.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client=primo&isbn=178969065X/sc.jpg"
          type="ARTICLE"
          title="De la provincia Celtiberia a la qūrā de Santabariyya"
          author="Barroso Cabrera, Rafael"
          info="Oxford: Archaeopress Publishing Ltd"
          descriptions=""
          @custom-event="handleEvent"
        />
        <bookCard
          img="https://proxy-euf.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.php?client=primo&isbn=9781789698503/sc.jpg"
          type="LLIBRE"
          title="La transformación del mundo rural en la isla de Mallorca durante la Antigüedad tardía (c. 300-902/903 d. C.)"
          author="Mas Florit, Catalina"
          info="Oxford: Archaeopress Publishing Ltd"
          descriptions="La transformación del mundo rural en la isla de Mallorca durante ..."
          @custom-event="handleEvent"
        />
      </div>
      <div>
        <paginationBar />
      </div>

      <div :class="{ 'book-content': true, 'book-fixed': isFixed }" v-if="display">
        <bookContent />
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
