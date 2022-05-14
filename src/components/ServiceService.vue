<script>
import 'animate.css';
import { serviceData } from '../serviceData';
import ServiceCardPro from './ServiceCardPro.vue';
import { showForm } from '../stores/store'
import { defineComponent } from '@vue/runtime-core';
import card1 from '../assets/HomeIntroImg/calc.png'
import card2 from '../assets/HomeIntroImg/stamp.png'
import card3 from '../assets/HomeIntroImg/taxy.png'
import card4 from '../assets/HomeIntroImg/man.png'
import card5 from '../assets/HomeIntroImg/files.png'
import card6 from '../assets/HomeIntroImg/searchLense.png'
import card7 from '../assets/HomeIntroImg/scessor.png'
import card8 from '../assets/HomeIntroImg/laptop.png'

export default defineComponent({
    components: {
        'ServiceCardPro': ServiceCardPro
    },
    data() {
        return {
            data: serviceData,
            showForm,
            imageLinks:[
                card1,
                card2,
                card3,
                card4,
                card5,
                card6,
                card7,
                card8,
            ]
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
        },
    },
});

</script>

<template>
    <div class="service-service">
        <div class="corner">
            <h4>НАШИ УСЛУГИ</h4>
        </div>
        <p class="text">
            Мы рады предложить полный спектр бухгалтерских и юридических услуг, которые помогут вам сконцентрироваться на развитии бизнеса, пока мы отвечаем за ежедневные административные задачи.
        </p>
        <div class="cards">
            <ServiceCardPro v-for="(item, index) in data" :key="item" :title="item.title"
                :description="item.description" :imageUrl="imageLinks[index]" @click="detailedSer(index, $event)" />
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
