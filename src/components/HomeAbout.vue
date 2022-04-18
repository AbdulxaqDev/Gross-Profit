<script>
import HomeAboutImg from './HomeAboutImg.vue'
import 'animate.css';
export default {
    components:{
        'HomeAboutImg':HomeAboutImg
    }

};
</script>

<template>
  <div class="home-about">
    <h1>О компании</h1>
    <div>
        <HomeAboutImg />
    </div>
    <a href=""><button>Подробнее</button></a>
  </div>
</template>

<style scoped>

.home-about{
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.home-about h1{
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #182061;
  margin-bottom: 70px;
}

.home-about a {
  text-decoration: none;
  font-weight: 500;
  margin-top: 50px;
}


.home-about button {
  background: #182061;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #182061;
  text-align: center;
  height: 60px;
  width: 300px;
  border-radius: 20px 0 20px 0;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
}

.home-about button:hover {
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.home-about a:hover button {
  color: #182061;
}


@media(max-width: 1290px) {
}

@media(max-width: 1220) {

}

@media(max-width: 900px) {

}

@media(max-width: 800px) {

}

</style>
