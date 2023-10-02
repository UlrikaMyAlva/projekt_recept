<script setup>
import {RouterLink, RouterView } from 'vue-router';
import uleri from './components/uleri.vue'
</script>

<template>
  <header>
    <div class="search-box">
      <!--ULRIKAS-->
      In this Div is a search box component
      <uleri msg="Search here"/>
      <uleri searchAlgoritm/>
    </div>
  </header>

  <aside>
    <div class="category-list">
      <!--AMANDA-->
      In this Div is a list of the different categories
    </div>
  </aside>

  <main>
    <!--<TheWelcome />-->
    <div class="recipe-list">
      <!--AMANDA-->
      In this Div is a list of all the recipes
    </div>
    <RouterLink to="/">show home</RouterLink>
    <RouterView></RouterView>
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
