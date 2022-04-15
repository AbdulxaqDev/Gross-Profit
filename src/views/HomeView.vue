<script>
import HomeIntro from "../components/HomeIntro.vue";
import HomeService from "../components/HomeService.vue";
export default {
  components:{
      'HomeIntro': HomeIntro
  }
};
</script>

<template>
  <div class="home">
    <HomeIntro/>
    <HomeService/>
  </div>
</template>

<style scoped>
</style>
