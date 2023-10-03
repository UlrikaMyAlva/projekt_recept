
<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }

})


function search () {
  let ulrika = document.getElementById("searchbox").value;
  console.log(ulrika);
  fetchDataFromSearch(ulrika);
}

function fetchDataFromSearch(search) {

  fetch (`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes?query=${search}`)
  .then(response => {
    if (!response.ok) {
      console.log("Not successful")
    }
    return response.json()
  })
  .then(data => renderData(data, search))
  .then(res=>{console.log(res)})

}

function renderData(data, search) {
  let channelArray = [];

  for (let d of data) {
    let c = {
        avgRating:d.avgRating,
        categories:d.categories, //[]
        description:d.description,
        imageUrl:d.imageUrl,
        ingredients:d.ingredients, //[] OBJEKT ARRAY
        instructions:d.instructions, //[]
        timeInMins:d.timeInMins,
        title:d.title,
        id:d._id
    }

    channelArray.push(c);

  }

  console.log(channelArray[0]);

  if (channelArray.length == 0) {
    document.getElementById("search").innerHTML= `Inga matchningar på ${search}`;
  }
  else {
    document.getElementById("search").innerHTML= `Du har sökt på ${search}`;
    return channelArray;
  }

}


</script>

<template>
  <div class="greetings">
    <h1 id="search"></h1>
    <h1 class="green">{{ msg }}</h1>
    <input id="searchbox" type="text" placeholder="Search..">
    <button type="input" id="btn" @click="search">Search</button>
  </div>
</template>