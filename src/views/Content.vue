<template>
  <section class="content">
    <div 
      class="hamburger"
      :class="open ? 'hamburger-open' : ''"
      @click="open = !open"
    >
      <span v-for="item in 3" :key="item" />
    </div>
    <Filters :open="open" />
    <div 
      v-if="cocktailsList"
      class="coctails-container"
    >
      <CocktailsList
        v-for="selected in SELECTED_FILTERS"
        :key="selected"
        :cocktails="cocktailsList[selected]"
        :filterName="selected"
      />
    </div>
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import { SELECTED_FILTERS } from '../store/getters'
  import { FETCH_FILTERS, FETCH_COCKTAILS } from '../store/actions'
  import CocktailsList from '../components/CocktailsList/CocktailsList'
  import Filters from '../components/Filters/Filters'

  export default {
    data() {
      return {
        visible: false,
        loadCount: 0,
        open: false,
      }
    },
    computed: {
      ...mapState({
        filters: state => state.filters,
        cocktailsList: state => state.cocktails,
      }),
      ...mapGetters([SELECTED_FILTERS]),
    },
    methods: {
      pagination() {
        const scrollY = window.scrollY
        const windowHeight = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        
        const bottomOfPage = pageHeight - (windowHeight + scrollY);
        
        if (bottomOfPage < 1 && !this.loadCount) {
        // variable loadCount needed for control scroll, because when we scroll to bottom, 
        // function pagination can be call two times with bottomOfPage < 1 === true
          this.loadCount++;        
          this.$store.dispatch(FETCH_COCKTAILS)
        } else {
          this.loadCount = 0;
        }
      }
    },
    beforeMount() {
      this.$store.dispatch(FETCH_FILTERS);
    },
    created () {
      window.addEventListener('scroll', this.pagination);
    },
    destroyed () {
      window.removeEventListener('scroll', this.pagination);
    },
    components: {
      CocktailsList,
      Filters
    }
  }
</script>
