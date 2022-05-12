<script>
import AboutAbout from "../components/AboutAbout.vue";
import HomeFooter from "../components/HomeFooter.vue";
import Form from "../components/Form.vue";


export default {
  components: {
    'AboutAbout': AboutAbout,
    'HomeFooter': HomeFooter,
    'Form': Form,
  },
  mounted() {
    console.log(this._inactive)
  },
};
</script>

<template>
  <div class="about" id="about">
    <p>Главная / <b>О нас</b></p>
    <AboutAbout />
    <HomeFooter />
    <Form />
  </div>
</template>

<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: #3E3D3D;
  margin: 50px 0 -50px 100px;
}
</style>
