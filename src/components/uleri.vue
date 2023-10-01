<!-- TEST TEST TEST -->

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }

  //A PROP THAT TAKES IN THE SEARCH WORD?
})

function searchAlgoritm() {
  //These two are only for me testing
  let text = "A tasty mexican meal for the whole family!";
  let textLower = text.toLowerCase();
  let search = "mexican";
  let searchLower = search.toLowerCase();

  let result = textLower.includes(searchLower);

  console.log(result);

  //COMPARE EACH DESCRIPTION OF EACH RECIPE 
  //IF TRUE, MAKE ARRAY? SEND TO AMANDAS RECIPE LIST?

}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <input type="text" placeholder="Search..">
  </div>
</template>