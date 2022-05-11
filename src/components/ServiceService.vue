<script>
import 'animate.css';
import { serviceData } from '../serviceData';
import ServiceCardPro from './ServiceCardPro.vue';
import { showForm } from '../stores/store'
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    components: {
        'ServiceCardPro': ServiceCardPro
    },
    data() {
        return {
            data: serviceData,
            showForm,
        }
    },
    methods: {
        detailedSer(i) {
            this.showForm.index = i;
            this.showForm.showDetailedSer = !this.showForm.showDetailedSer
            // This prevents the page from scrolling down to where it was previously.
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    },
});

console.log(showForm.index);


</script>

<template>
    <div class="service-service">
        <div class="corner">
            <h4>НАШИ УСЛУГИ</h4>
        </div>
        <p class="text">
            Берём на себя всю бугалтерию! Ведем налоговый учет и готовим счета к оплате вовремя и без задержек. Берём на
            себя всю бугалтерию! Ведем налоговый учет и готовим счета к оплате вовремя и без задержек. Берём на себя всю
            бугалтерию! Ведем налоговый учет и готовим счета к оплате вовремя и без задержек. Берём на себя всю
            бугалтерию!
        </p>
        <div class="cards">
            <ServiceCardPro v-for="(item, index) in data" :key="item" :title="item.title"
                :description="item.description" :imageUrl="item.imgLink" @click="detailedSer(index, $event)" />
        </div>
    </div>
</template>

<style scoped>
.service-service {
    margin: 120px 100px 100px;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: #FFFFFF;
    border-radius: 25px;
    padding: 50px 50px 50px 50px;
}

.corner {
    position: absolute;
    background: #F4B504;
    border-radius: 25px 1px;
    padding: 10px;
    width: 400px;
    height: 60px;
    left: 50px;
    top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.corner h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #182061;
}

.text {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #3E3D3D;
    opacity: 0.6;
}

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}


@media(max-width: 1500px) {}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
