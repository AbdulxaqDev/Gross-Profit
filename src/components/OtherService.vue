<script>
import 'animate.css';
import { serviceData } from '../serviceData';
import ServiceCardPro from './ServiceCardPro.vue';
import { showForm } from '../stores/store'

export default {
    components: {
        'ServiceCardPro': ServiceCardPro
    },
    data() {
        return {
            data: serviceData,
            showForm
        }
    },
    methods: {
        detailedSer(index) {
            this.showForm.index = index;
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
};


</script>

<template>
    <div class="other-service">
        <div class="detailed">
            <div class="title-img">
                <div>
                    <h1 class="title">{{ data[showForm.index].title }}</h1>
                    <p>{{ data[showForm.index].description }}</p>
                </div>
                <img :src="data[showForm.index].imgLink" alt="Calculation">
            </div>
            <p class="text">{{ data[showForm.index].text }}</p>
        </div>
        <div class="other">
            <h1 class="title">Другие услуги</h1>
            <div class="cards">
                <div v-for="(item, index) in data" :key="item" class="card"
                    :class="index == showForm.index ? 'activeCard' : ''" @click="detailedSer(index, $event)">
                    <h2>{{ item.title }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.other-service {
    margin: 120px 100px 0;
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.detailed {
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 25px;
    padding: 50px 70px;
}

.title-img {
    display: flex;
    justify-self: space-between;
    align-items: center;
}

.title {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #182061;
}

.other h1 {
    text-align: left;
    padding-left: 70px;
    margin-bottom: 30px;
}

.title-img p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #3E3D3D;
}

.title-img img {
    width: 200px;
}

.text {
    margin-top: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #3E3D3D;
    opacity: 0.6;
}

.other {
    padding: 50px 0;
    margin-top: 100px;
    width: 100%;
}

.cards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.card {
    background: #FFFFFF;
    border-radius: 20px;
    max-width: 45%;
    width: 100%;
    min-width: 440px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 18px;
    padding: 50px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
}

.card:hover {
    transform: translateY(-20px);
    background: #F4B504;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.card h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #182061;
}

.activeCard {
    background: #F4B504
}



@media(max-width: 1500px) {}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
