<template>
  <div class="cocktail">
    <img :src="cocktail.strDrinkThumb" class="cocktail-img" />
    <span class="cocktail-text">{{cocktail.strDrink}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      cocktail: Object,
    },
  }
</script>