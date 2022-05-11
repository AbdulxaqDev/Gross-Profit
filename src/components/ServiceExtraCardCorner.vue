<script>
export default {
    props: [
        "extraDescription",
        "backGround"
    ]
};
</script>

<template>
    <div class="service-extra-card">
        <div class="size">
            <div class="corner" :class="backGround % 2 === 0?'yellowBack':'blueBack'" ></div>
            <div class="upper" > 
                <img src="../assets/HomeIntroImg/smallArrow.png" alt="">
                <p>{{ extraDescription }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.upper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3px 40px;
    background: #F4F7FA;
    border-radius: 25px;
    z-index: 10;
    position: relative;
    width: 100%;
    height: 100%;
}

.size {
    margin: 15px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #F4F7FA;
    border-radius: 25px;
    position: relative;
}

.service-extra-card {
    padding: 0 70px;
    width: 100%;
}

.corner {
    position: absolute;
    width: 180px;
    height: 82px;
    right: -20px;
    top: -20px;
    border-radius: 5px 50px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 1;
}

p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #182061;
}

img {
    margin-right: 35px;
}

.yellowBack{
    background: #F4B504;
}
.blueBack{
    background: #182061;
}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
