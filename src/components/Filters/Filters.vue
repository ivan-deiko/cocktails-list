<template>
  <div class="filters" :class="open ? 'filters-open' : ''">
    <div class="filters-container" v-if="localFilters">
      <div 
        class="checkbox-container" 
        v-for="filter in localFilters"
        :key="filter.name"
      >
        <input
          class="custom-checkbox"
          type="checkbox" 
          v-model="filter.selected"
          :id="filter.name"
        />
        <label 
          :for="filter.name"
          class="checbox-label"
        > 
          {{filter.name}}
        </label>
      </div>
      <button 
        class="filters-btn"
        @click="apply"
      > 
        apply
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { FILTERS } from '../../store/getters'
  import { APPLY_FILTERS } from '../../store/actions'

  export default {
    props: {
      open: Boolean,
    },
    data() {
      return {
        localFilters: null,
      }
    },
    computed: {
      ...mapGetters([FILTERS])
    },
    methods: {
      apply () {
        const newSelected = this.localFilters.filter(filter => filter.selected).map(item => item.name);
        this.$store.dispatch(APPLY_FILTERS, newSelected);
      },
    },
    watch: {
      FILTERS(val) {
        this.localFilters = [...val]
      }
    }
  }
</script>