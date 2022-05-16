<script>
export default {
    methods: {
        scollEvent() {
            const aboutImg = document.getElementById('box')
            if (window.scrollY > 1500) {
                aboutImg.classList.add('showImg')
            }
        },
    },
    created() {
        window.addEventListener('scroll', this.scollEvent);
    },
    unmounted() {
        window.removeEventListener('scroll', this.scollEvent);
    },
}
</script>

<template>
    <div class="home-about-img" id="box">
        <div class="corner-block"></div>
        <img src="../assets/HomeIntroImg/aboutImg.png" alt="">
        <div class="corner-block2"></div>
    </div>
</template>

<style scoped>
.home-about-img {
    position: relative;
    /* transform: scale(0.8); */
    margin-right: 50px;
    transition: 0.5s;
    visibility: hidden;
}

.showImg {
    animation: fadeInLeft;
    animation-duration: 1s;
    visibility: visible;
}

.home-about-img img {
    width: 479px;
    height: 420px;
    border-radius: 50px;
    transform: matrix(1, 0, 0, 1, 0, 0);
}

.corner-block {
    position: absolute;
    width: 323px;
    height: 245px;
    left: -30px;
    top: -30px;
    background: #F4B504;
    border-radius: 50px 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.corner-block2 {
    position: absolute;
    width: 86px;
    height: 50px;
    right: -12px;
    bottom: -12px;
    background: #182061;
    box-shadow: 0px 0px 50px rgba(245, 232, 255, 0.6);
    border-radius: 25px 1px;
}


.home-about a:hover button {
    color: #182061;
}

@media(max-width: 1400px) {
    .home-about-img {
        transform: scale(0.8);
        margin-right: 0;
        transition: 0.5s;
    }
}

@media(max-width: 400px) {

    .home-about-img {
        transform: scale(0.7);
        transition: 0.5s;
    }
}
</style>
