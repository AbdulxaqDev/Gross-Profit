<script>
import { showForm } from '../stores/store'



export default {
    data() {
        return {
            showForm
        }
    },
    methods: {
        showModal() {
            const el = document.getElementById('modal')
            el.classList.add('showModal')
            setTimeout(() => {
                el.classList.remove('showModal')
            }, 2000);
        },
        sendMessage() {

            let name = document.getElementById('name').value;
            let phoneNumber = document.getElementById('phoneNumber').value;
            let description = document.getElementById('description').value;
            if (name == '' || phoneNumber == '' || description == '') {
                return
            }
            let my_text = `Имя:  ${name}%0AТелефонный номер:  ${phoneNumber}%0AДополнительная информация:  ${description}`

            const token = '5398248085:AAHtX4fgYmWfVzDbe4GjVxWMmXiGK0ZTOys';
            const chat_id = -633562777
            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
            let api = new XMLHttpRequest();
            api.open('GET', url, true);
            api.send();
            this.showForm.isVisible = false;
            this.cleanMessage();
            this.showModal();
        },
        cleanMessage() {
            document.getElementById('name').value = '';
            document.getElementById('phoneNumber').value = '';
            document.getElementById('description').value = '';
        }
    }
}
</script>
<template>
    <main>
        <div class="closer" @click="showForm.isVisible = false" :class="showForm.isVisible? 'activeCloser': ''"></div>
        <form @submit.prevent="" class="bot-form" :class="showForm.isVisible ? '' : 'hideForm'">
            <h1>Заказать звонок</h1>
            <p>Ваше имя <span class="yellow">*</span></p>
            <input required type="text" id="name">
            <p>Ваш телефон <span class="yellow">*</span></p>
            <input required type="text" id="phoneNumber">
            <p>Дополнительная информация</p>
            <textarea required name="" id="description" cols="30" rows="10"></textarea>
            <div class="submit">
                <input @click="sendMessage" type="submit" value="Заказать звонок">
            </div>
        </form>
        <div class="modal" id="modal">
            <div class="top">
                <img src="../assets/HomeIntroImg/modalTick.png" alt="">
            </div>
            <div class="bottom">
                <h2>Oтлично!</h2>
                <p>Bаше сообщение успешно отправлено!</p>
            </div>
        </div>
    </main>
</template>


<style scoped>

.closer{
    position: fixed;
    left: 0;
    top: -100vh;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0) ;
    z-index: 90;
    transition: 0.7s;
}

.activeCloser{
    top: 0;
}

h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #182061;
}

.bot-form {
    transition: 0.7s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background: #FFFFFF;
    box-shadow: 1px 1px 30px #828282;
    border-radius: 25px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    height: 80vh;
    width: 80vw;
}

.bot-form input[type=text],
textarea {
    width: 90%;
    height: 50px;
    background: #FFFFFF;
    border: 0.5px solid #3E3D3D;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 13px 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #000000;
}

.bot-form input[type=text]:focus {
    outline: 0.5px solid #F4B504;
    border: #F4B504;
}

p {
    text-align: left;
    width: 90%;
    margin: 10px 0;
}

textarea {
    height: 200px;
    resize: none;
}

textarea:focus {
    outline: 0.5px solid #F4B504;
    border: #F4B504;
}

.submit {
    width: 90%;
    display: flex;
    justify-content: flex-end;
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
    margin-top: 25px;
    height: 50px;
    width: 214;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'montserrat';
    border-radius: 20px 1px;
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

.hideForm {
    top: -120%;
}

.modal {
    transition: 0.7s;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 300px;
    box-shadow: 0 0 10px gray;
    border-radius: 20px;
    overflow: hidden;
    transform: translate(-50%, -50%);
    z-index: 100;
    transition-delay: 0.3s;
}

.top {
    height: 50%;
    width: 100%;
    background: #F4B504;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom {
    height: 50%;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
}

.top img {
    width: 100px;
}

.bottom h2,
.bottom p {
    text-align: center;
    color: #182061;
}

.showModal {
    opacity: 1;
    visibility: visible;
}
</style>