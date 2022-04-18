<script>
import HomeIntro from "../components/HomeIntro.vue";
import HomeService from "../components/HomeService.vue";
import HomeAbout from "../components/HomeAbout.vue";
export default {
  components:{
      'HomeIntro': HomeIntro,
      'HomeService': HomeService,
      'HomeAbout': HomeAbout,

  }
};
</script>

<template>
  <div class="home" id="home">
    <HomeIntro/>
    <HomeService/>
    <HomeAbout/>
  </div>
</template>

<style scoped>



</style>
