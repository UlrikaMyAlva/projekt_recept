<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import uleri from './components/uleri.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="Receptsajt" /> -->
    </div>
  </header>

  <main>
    <!--<TheWelcome />-->
    <div class="search-box">
      <!--ULRIKAS-->
      In this Div is a search box component
      <uleri msg="Search here"/>
    </div>
    <br/><br/><br/>
    <div class="category-list">
      <!--AMANDA-->
      In this Div is a list of the different categories
    </div>
    <br/><br/><br/>
    <div class="recipe-list">
      <!--AMANDA-->
      In this Div is a list of all the recipes
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
