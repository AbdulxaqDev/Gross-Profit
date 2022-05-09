<script>

import { showForm } from '../stores/store'





export default {
    data() {
        return {
            showForm
        }
    },
    methods: {
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
            this.cleanMessage()
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
</template>


<style scoped>
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
    max-width: 600px;
    width: 90vw;
    background: #FFFFFF;
    box-shadow: 1px 1px 30px #828282;
    border-radius: 25px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
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
</style>