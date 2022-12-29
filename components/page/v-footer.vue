<template>
<footer class="v-footer">
  <img class="v-footer__footer-logo" src="/footer-logo.svg" alt="логотип автосервиса">
  <div class="v-footer__container-text">
  <p class="v-footer__text">Цены на сайте не являются публичной офертой и носят информативный характер.</p>
  <p class="v-footer__text"> Определяется положениями Статьи 437 ГК РФ.</p>
  </div>
  <button class="v-footer__button-up">
    <p class="v-footer__button-up-text">Наверх</p>
    <img class="v-footer__button-up-strelka" src="/footer-strelkaup.png" alt="на изображении стрелочка указывающая вверх">
  </button>
</footer>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style scoped lang="scss">
.v-footer {
  max-width: 1920px;
  min-height: 300px;
  background: #070A2A;
  display: flex;
  justify-content: space-around;
  align-items: center;


&__footer-logo {
  width: 146px;
  height: 104px;
}

  &__container-text {
    max-width: 978px;
    display: flex;
    flex-direction: column;
  }

  &__text {
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.5;
  }

  &__button-up {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: flex;
   align-items: center;
  }

  &__button-up-text {
    font-family: 'Inter', "Arial", sans-serif;
    max-width: 86px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    padding-right: 9px;
    opacity: 0.8;
  }

  &__button-up-strelka {
object-fit: cover;
background-size: cover;



  }

}
</style>
