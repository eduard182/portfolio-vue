<template>
  <div class="two main-content">

  
  <div class="left-content slideUp">

     <router-link to="/project/one"> <img src="../assets/arrow-up.svg" class="arrow arrow-up" alt="arrow-navigator"> </router-link>


    <h1>Project 02</h1>
    <p class="subtext">Lorem ipsum</p>
    <p class="subtext">Lorem ipsum</p>

    <!-- <router-link to="/project/three"> <img src="../assets/arrow-down.svg" class="arrow arrow-down" alt="arrow-navigator"> </router-link> -->
  </div>

<div class="right-content img2">



</div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

$page_color: black;

h1 {
  color: $page_color !important;
}

.img2 {
  background: url("../assets/poster1.png");
  background-size: cover;
  background-position: 50%;

  img {
    width: 50%;
  }
}

  

</style>
