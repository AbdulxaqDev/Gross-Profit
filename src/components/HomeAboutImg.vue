<script>
import 'animate.css';
export default {

};
</script>

<template>
    <div class="home-about-img">
        <div class="corner-block"></div>
        <img src="" alt="">
    </div>
</template>

<style scoped>

.home-about-img{
    border: red solid 1px;
    position: relative;
}
.corner-block {
    position: absolute;
    width: 323px;
    height: 245px;
    left: 0;
    top: 0;
    background: #F4B504;
    border-radius: 50px 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.home-about a:hover button {
    color: #182061;
}


@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}
</style>
