<script>
import HomeIntro from "../components/HomeIntro.vue";
import HomeService from "../components/HomeService.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomeStakeholders from "../components/HomeStakeholders.vue";
import HomeContactDetails from "../components/HomeContactDetails.vue";
import HomeFooter from "../components/HomeFooter.vue";

export default {
  components:{
      'HomeIntro': HomeIntro,
      'HomeService': HomeService,
      'HomeAbout': HomeAbout,
      'HomeStakeholders': HomeStakeholders,
      'HomeContactDetails': HomeContactDetails,
      'HomeFooter': HomeFooter,

  }
};
</script>

<template>
  <div class="home" id="home">
    <HomeIntro/>
    <HomeService/>
    <HomeAbout/>
    <HomeStakeholders/>
    <HomeContactDetails/>
    <HomeFooter/>
  </div>
</template>

<style scoped>



</style>
