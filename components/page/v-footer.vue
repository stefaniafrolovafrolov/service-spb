<template>
  <footer class="v-footer">
    <div class="v-footer__footer-logo"></div>
    <div class="v-footer__container-text">
      <p class="v-footer__text">Цены на сайте не являются публичной офертой и носят информативный характер.</p>
      <p class="v-footer__text"> Определяется положениями Статьи 437 ГК РФ.</p>
    </div>
    <button class="v-footer__button-up">
      <p class="v-footer__button-text">Наверх</p>
      <img class="v-footer__button-up-strelka" src="/footer-strelkaup.png"
           alt="на изображении стрелочка указывающая вверх">
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
  padding: 96px 100px;
  background: #070A2A;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 77px 96px;
  }

  @media (max-width: 1280px) {
    padding: 68px 88px;
  }

  &__footer-logo {
    background-image: url("/footer-logo.svg");
    width: 146px;
    height: 104px;

    @media (max-width: 1440px) {
      width: 120px;
      height: 69px;
      background-image: url("/logo-header-1420.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    @media (max-width: 1280px) {
      width: 106px;
      height: 65px;
      background-image: url("/logo-header-1280.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

  }

  &__container-text {
    max-width: 978px;
    display: flex;
    flex-direction: column;


  }

  &__text {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.5;

    @media (max-width: 1440px) {
      max-width: 815px;
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 1280px) {
      max-width: 734px;
      font-size: 18px;
      line-height: 22px;
    }

    @media (max-width: 1024px) {
      max-width: 657px;
      font-size: 16px;
      line-height: 19px;
    }

  }

  &__button-up {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;

  }

  &__button-text {
    max-width: 86px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    padding-right: 9px;
    opacity: 0.8;

    @media (max-width: 1440px) {
      max-width: 72px;
      font-size: 20px;
      line-height: 24px;
      padding-right: 5px;
    }

    @media (max-width: 1024px) {
      max-width: 57.94px;
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__button-up-strelka {
    object-fit: cover;
    background-size: cover;
  }

}
</style>
