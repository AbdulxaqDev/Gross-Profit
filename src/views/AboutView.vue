<script>
import AboutAbout from "../components/AboutAbout.vue";
import HomeFooter from "../components/HomeFooter.vue";
import Form from "../components/Form.vue";
import HomeBottom from "../components/HomeBottom.vue";


export default {
  components: {
    'AboutAbout': AboutAbout,
    'HomeFooter': HomeFooter,
    'Form': Form,
    'HomeBottom': HomeBottom,
  },
  mounted() {
    console.log(this._inactive)
  },
};
</script>

<template>
  <div class="about" id="about">
    <p class="common" >Главная / <b>О нас</b></p>
    <AboutAbout />
    <HomeFooter />
    <Form />
    <HomeBottom />
  </div>
</template>

<style scoped>
.common {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #3E3D3D;
  margin: 50px 0 -50px 100px;
}
</style>
