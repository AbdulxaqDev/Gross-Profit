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
    <div class="serviceCard">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <img :src="imageUrl" alt="Service">
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
    justify-content: flex-start;
    flex-direction: column;
    margin: 18px;
    padding: 30px;
    box-shadow: 0 0 15px #f3f1f1;
    transition: 0.2s;
}

.serviceCard:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #dbdbdb;
}

.serviceCard img {
    position: absolute;
    width: 100px;
    right: 22px;
    bottom: 9px;
}

.serviceCard h3,
p {
    z-index: 2;
}

.serviceCard p {
    width: 90%;
    line-height: 24px;
    opacity: 0.6;
}

.serviceCard h3 {
    margin-bottom: 20px;
    color: #182061;
}

@media (max-width: 900px) {
    .serviceCard p {
        font-size: 12px;
    }
}
</style>
