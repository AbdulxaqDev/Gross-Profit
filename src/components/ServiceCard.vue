<script>
import 'animate.css'
import { RouterLink, RouterView } from "vue-router";



export default {
    props: [
        'title',
        'description',
        'imageUrl',
    ],
};
</script>

<template>
    <div class="serviceCard">
        <RouterLink to="/service">
            <h3 v-html="title"></h3>
            <p v-html="description"></p>
            <div class="image">
                <img :src="imageUrl" alt="Service">
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.serviceCard {
    background: #FFFFFF;
    border-radius: 20px;
    max-width: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 18px;
    padding: 30px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
    padding: 30px 30px 10px;
}

.serviceCard a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #3E3D3D;
}

.serviceCard:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #dbdbdb;
}

.serviceCard .image {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.serviceCard h3,
p {
    z-index: 2;
}

.serviceCard p {
    line-height: 24px;
    opacity: 0.6;
    font-size: 16px;
}

.serviceCard h3 {
    font-size: 20px;
    margin-bottom: -10px;
    color: #182061;
    font-weight: 500;
}

@media (max-width: 900px) {
    .serviceCard p {
        font-size: 12px;
    }
}
</style>
