<script>
import ServiceService from "../components/ServiceService.vue";
import HomeFooter from "../components/HomeFooter.vue";
import Form from "../components/Form.vue";
import HomeBottom from "../components/HomeBottom.vue";
import OtherService from "../components/OtherService.vue";
import { showForm } from '../stores/store'
import { defineComponent } from "@vue/runtime-core";
import { serviceData } from '../serviceData'



export default defineComponent({
  components: {
    'ServiceService': ServiceService,
    'OtherService': OtherService,
    'HomeFooter': HomeFooter,
    'Form': Form,
    'HomeBottom': HomeBottom,
  },
  methods: {
    detailedSer() {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
  },
  data() {
    return {
      showForm,
      data: serviceData
    }
  },
  created() {
    this.showForm.showDetailedSer = false;
    this.showForm.index = '';
  },
  mounted() {
    this.detailedSer();
  },
  unmounted() {
    window.onload = function () {
      location.assign = "https://www.javascripttutorial.net/";
    }
  },
});
</script>

<template>
  <div class="service" id="service">
    <p v-if="showForm.index === ''">Главная / <b>Услуги</b></p>
    <p v-else>Главная / Услуги /<b>{{ data[showForm.index].title }}</b></p>
    <ServiceService v-if="!showForm.showDetailedSer" />
    <!-- <OtherService v-if="showForm.showDetailedSer" /> -->
    <HomeFooter />
    <Form />
    <HomeBottom />
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
