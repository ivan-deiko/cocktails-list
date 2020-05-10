<template>
  <div
    v-if="cocktails"
    class="cocktails"
  >
    <span class="cocktails-name">{{ filterName }}</span>
    <div class="cocktails-container">
      <Cocktail 
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>

<script>
  import Cocktail from './Cocktail'

  export default {
    props: {
      cocktails: Array,
      filterName: String,
    },
    components: {
      Cocktail,
    }
  }
</script>