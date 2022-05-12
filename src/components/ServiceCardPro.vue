<script>
import 'animate.css'
export default {
    props: [
        'title',
        'description',
        'imageUrl',
    ]
};
</script>

<template>
    <div class="serviceCardPro">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <img :src="imageUrl" alt="Services">
        <button>Подробнее</button>
    </div>
</template>

<style scoped>
.serviceCardPro {
    background: #FFFFFF;
    border-radius: 20px;
    min-width: 35%;
    width: 35%;
    height: 220px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 18px;
    padding: 50px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
}

.serviceCardPro:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #dbdbdb;
}

.serviceCardPro img {
    position: absolute;
    width: 120px;
    right: 22px;
    bottom: 9px;
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

button {
    position: absolute;
    width: 165px;
    height: 50px;
    left: 50px;
    bottom: 30px;
    background: #FFFFFF;
    border: 1px solid #182061;
    border-radius: 25px 1px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #182061;
}
button:hover{
    color: #fff;
    background: #182061;
    transition: 0.3s;
    cursor: pointer;
}

@media (max-width: 900px) {
    .serviceCardPro p {
        font-size: 12px;
    }
}
</style>
