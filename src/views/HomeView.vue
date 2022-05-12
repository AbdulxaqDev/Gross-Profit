<script>
import HomeIntro from "../components/HomeIntro.vue";
import HomeService from "../components/HomeService.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomeStakeholders from "../components/HomeStakeholders.vue";
import HomeContactDetails from "../components/HomeContactDetails.vue";
import HomeFooter from "../components/HomeFooter.vue";
import HomeBottom from "../components/HomeBottom.vue";
import Form from "../components/Form.vue";


export default {
  components:{
      'HomeIntro': HomeIntro,
      'HomeService': HomeService,
      'HomeAbout': HomeAbout,
      'HomeStakeholders': HomeStakeholders,
      'HomeContactDetails': HomeContactDetails,
      'HomeFooter': HomeFooter,
      'HomeBottom': HomeBottom,
      'Form': Form,

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
    <HomeBottom/>
    <Form/>

  </div>
</template>

<style scoped>



</style>
