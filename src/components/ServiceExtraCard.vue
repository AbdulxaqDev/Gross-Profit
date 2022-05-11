<script>
export default {
    props: [
        "extraDescription"
    ]
};
</script>

<template>
    <div class="service-extra-card">
        <div class="size">
            <img src="../assets/HomeIntroImg/smallArrow.png" alt="">
            <p>{{ extraDescription }}</p>
        </div>
    </div>
</template>

<style scoped>
.size {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3px 40px;
    background: #F4F7FA;
    border-radius: 25px;
    margin: 5px 0;
}

.service-extra-card {
    padding: 0 70px;
    width: 100%;
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


@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
