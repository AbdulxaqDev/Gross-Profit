<script>

import mapboxgl from "mapbox-gl";
import { onBeforeMount, onMounted } from "vue";
import { showForm } from '../stores/store'


export default {
    data(){
        return{
            showMessageCover: false,
        }
    },
    mounted() {
        // onMounted(() => {
            const lonLat = [69.340188, 41.348679]
            const mapE = document.getElementById('map').value
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: lonLat, // starting position [lng, lat]
                zoom: 16 // starting zoom
            });

            new mapboxgl.Marker().setLngLat(lonLat).addTo(map);

            const cleanMessage = () => {
                document.getElementById('email').value = '';
            }



            const form = document.getElementById('form')
            form.addEventListener('submit', () => {

                let email = document.getElementById('email').value;
                let my_text = `Email:  ${email}`
                if (email == '') {
                    return
                }
                const token = '5398248085:AAHtX4fgYmWfVzDbe4GjVxWMmXiGK0ZTOys';
                const chat_id = -633562777
                const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
                let api = new XMLHttpRequest();
                api.open('GET', url, true);
                api.send();
                cleanMessage();
                this.showMessageCover = !this.showMessageCover;
            })
        // })
    },
}

</script>


<template>
    <div class="home-footer">
        <h1>Свяжитесь с нами</h1>
        <div class="contacts">
            <img class="logoText" src="../assets/HomeIntroImg/logoText.png" alt="logo-text">
            <div>
                <img src="../assets/HomeIntroImg/location.png" alt="">
                <p>г.Ташкент,<br />улица Осиё 86/32</p>
            </div>
            <div>
                <img src="../assets/HomeIntroImg/calendar.png" alt="">
                <p>с 09:00 - 18:00 пн-сб </p>
            </div>
            <h4>(998) 99 218-55-88</h4>
        </div>
        <div class="map-form">
            <div id="map" class="map"></div>
            <div class="message">
                <div class="img-form">
                    <img src="../assets/HomeIntroImg/girlOnCall.png" alt="">
                    <div>
                        <h5>Есть вопросы? </h5>
                        <p>Задайте их менежеру!</p>
                    </div>
                </div>
                <form id="form" action="" @submit.prevent="">
                    <div class="cover" :class="showMessageCover ? 'showMessageCover' : ''">
                        <img src="../assets/HomeIntroImg/cover.png" alt="">
                        <h2>Мы свяжемся с вами!</h2>
                    </div>
                    <input type="text" required id="email" placeholder="E-mail">
                    <input type="submit" value="Получить консультацию">
                </form>
                <p>
                    Нажмимая кнопку “Отправит” вы соглашетесь
                    с <span class="yellow">политикой обработики персональных данных</span>
                </p>
            </div>
        </div>
    </div>
</template>



<style scoped>
#map {
    height: 500px;
    width: 590px;
}

.home-footer {
    padding-top: 70px;
    background: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 70px;
}

.home-footer h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #182061;
    margin-bottom: 20px;
}

.home-footer h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #182061;
}

.home-footer h5 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 33px;
    color: #182061;
}

.contacts {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
}

.contacts div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logoText {
    width: 170px;
}

.map-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.message {
    position: relative;
    margin-left: -66px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #F4F7FA;
    border-radius: 50px 5px;
    width: 473px;
    height: 420px;
    z-index: 1;
}

.message .img-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.message .img-form div {
    margin-left: 20px;
}

.message form,
.cover {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cover {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0;
    top: 0;
    background: #F4F7FA;
    border-radius: 50px 5px;
    width: 473px;
    height: 420px;
    z-index: 2;
    display: none;
}


form input {
    margin-top: 25px;
    height: 50px;
    width: 400px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px 1px;
}

form input[type=text] {
    outline: none;
    background: #FFFFFF;
    border: 0.5px solid #3E3D3D;
}


form input[type=submit] {
    transition: 0.3s;
    background: #F4B504;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
}

form input[type=submit]:hover {
    cursor: pointer;
    background: #fff;
    color: #F4B504;
    border: #F4B504 1px solid;
}

.yellow {
    color: #F4B504;
}

.cover img {
    margin: 0;
    border: #182061 1px;
    width: 400px;
    margin-top: -50px;
}

.cover h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #F4B504;
    margin-top: -50px;
}

.showMessageCover {
    display: unset;
}

@media(max-width: 1670px) {}

@media(max-width: 1300px) {}

@media(max-width: 1290px) {}

@media(max-width: 1220) {}

@media(max-width: 1050px) {

    .contacts,
    .map-form {
        flex-direction: column;
    }

    .contacts {
        padding: 50px 0;
        justify-content: space-around;
        height: 400px;
    }

    .message {
        margin: -66px 0 0 0;
    }

}

@media(max-width: 900px) {}

@media(max-width: 800px) {}

@media(max-width: 750px) {}
</style>
