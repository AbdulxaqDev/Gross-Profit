<script>

import { RouterLink, RouterView } from "vue-router";



export default {
    props: [
        'title',
        'description',
        'imageUrl',
        'serviceLink',
    ]
};
</script>

<template>
    <div class="serviceCardPro">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="image" >
            <RouterLink :to="serviceLink"><button>Подробнее</button></RouterLink>
            <img :src="imageUrl" alt="Services">
        </div>

    </div>
</template>

<style scoped>
.serviceCardPro {
    background: #FFFFFF;
    border-radius: 20px;
    min-width: 35%;
    width: 35%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 18px;
    padding: 48px 48px 10px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
    height: 300px;
}



.serviceCardPro:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #dbdbdb;
}

.serviceCardPro img {
    width: 120px;
}

.serviceCardPro h3,
p {
    z-index: 2;
}

.serviceCardPro p {
    width: 90%;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #3E3D3D;
    opacity: 0.6;
    margin-bottom: 30px;
}

.serviceCardPro h3 {
    margin-bottom: 20px;
    color: #182061;
}

.serviceCardPro .image {
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
}

button {
    width: 165px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #182061;
    border-radius: 25px 1px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
}

button a{
    color: #182061;
    text-decoration: none;
}

button:hover {
    background: #182061;
    transition: 0.3s;
    cursor: pointer;
}
button:hover{
    color: #fff;
}

@media (max-width: 1225px) {
    .serviceCardPro {
        width: 100%;
    }
}

@media (max-width: 900px) {
    .serviceCardPro p {
        font-size: 12px;
    }
}
</style>
