<script setup>


</script>


<template>
    <div class="home-bottom">
        <div class="text">
            <img class="logo" src="../assets/HomeIntroImg/LogoGrossProfitHorizontal.png" alt="">
            <p>Информация и фотоконтент на сайте защищены. Их нельзя записывать, копировать,
                распространять, иначе возникнет соблазн их сохранить!
            </p>
            <div>
                <font-awesome-icons icon="HatWizard" />
            </div>
        </div>
        <p class="copyRight">© Copyright 2022 D. Q. T. Все права защищены!</p>
    </div>
</template>



<style scoped>

.home-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.text p {
    color: #F4B504;
    padding: 0 30px;
}

.copyRight {
    border-top: 1px solid #e4e3e3;
    padding: 10px 0;
    width: 100%;
}

img {
    width: 200px;
    border: red solid 1px;
}

@media(max-width: 1670px) {}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 1050px) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
