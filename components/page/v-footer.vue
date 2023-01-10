<template>
  <footer class="v-footer">
    <div class="v-footer__container">
      <div style="display: block">
        <div class="v-footer__footer-logo"></div>
      </div>
      <div class="v-footer__container-text">
        <p class="v-footer__text">Цены на сайте не являются публичной офертой и носят информативный характер.</p>
        <p class="v-footer__text"> Определяется положениями Статьи 437 ГК РФ.</p>
      </div>
      <div style="display: block">
        <button class="v-footer__button-up" :class="{ 'active' : isActive }" @click="isActive = !isActive"></button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "v-footer",
  data: () => ({
    isActive: false,
  }),

}
</script>

<style scoped lang="scss">

.v-footer {
  max-width: 1920px;
  padding: 96px 0 100px 0;
  background: #070A2A;

  .active {
    background-image: url("/Property 1=Variant3.svg");
  }


  @media (max-width: 1440px) {
    padding: 77px 0 96px 0;
  }

  @media (max-width: 1280px) {
    padding: 68px 0 88px 0;
  }

  @media (max-width: 1024px) {
    padding: 70px 0 70px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0 40px 0;
  }


  &__container {
    margin: 0 auto;
    max-width: 1520px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1550px) {
      max-width: 1350px;
    }

    @media (max-width: 1440px) {
      max-width: 1230px;
    }

    @media (max-width: 1280px) {
      max-width: 1110px;
    }

    @media (max-width: 1135px) {
      max-width: 1000px;
    }

    @media (max-width: 1024px) {
      max-width: 945px;
    }

    @media (max-width: 950px) {
      max-width: 850px;
    }

    @media (max-width: 860px) {
      max-width: 760px;
    }

    @media (max-width: 768px) {
      max-width: 710px;
    }

    @media (max-width: 716px) {
      max-width: 610px;
    }

    @media (max-width: 616px) {
      max-width: 510px;
    }

    @media (max-width: 520px) {
      max-width: 430px;
    }

    @media (max-width: 435px) {
      max-width: 380px;
    }

    @media (max-width: 385px) {
      max-width: 360px;
    }

    @media (max-width: 320px) {
      max-width: 272px;
    }

  }

  &__footer-logo {
    background-image: url("/footer-logo.svg");
    width: 146px;
    height: 104px;

    @media (max-width: 1440px) {
      background-image: url("/logo-header-1420.svg");
      width: 120px;
      height: 86px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    @media (max-width: 1280px) {
      background-image: url("/logo-header-1280.svg");
      width: 106px;
      height: 75px;

    }

    @media (max-width: 1024px) {
      background-image: url("/logo-header-1024.svg");
      width: 96px;
      height: 68px;

    }

    @media (max-width: 616px) {
      background-image: url("/logo-header-320.svg");
      width: 60px;
      height: 40px;

    }

    @media (max-width: 365px) {
      width: 40px;
      height: 20px;

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

    @media (max-width: 860px) {
      max-width: 600px;
      font-size: 14px;
      line-height: 17px;
    }

    @media (max-width: 768px) {
      max-width: 500px;
      font-size: 12px;
      line-height: 15px;
    }

    @media (max-width: 716px) {
      max-width: 400px;
      font-size: 10px;
      line-height: 12px;
    }

    @media (max-width: 616px) {
      max-width: 420px;
      font-size: 8px;
      line-height: 10px;
    }

    @media (max-width: 520px) {
      font-size: 6px;
      line-height: 7px;
    }

    @media (max-width: 320px) {
      max-width: 190px;
      font-size: 6px;
      line-height: 7px;
    }

  }

  &__button-up {
    background-image: url("/Group 86.svg");
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    width: 95px;
    height: 29px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #FF0000;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    @media (max-width: 1440px) {
      width: 77px;
      height: 24px;
    }

    @media (max-width: 1280px) {
      width: 70px;
      height: 22px;
    }

    @media (max-width: 1024px) {
      width: 61px;
      height: 19px;
    }

    @media (max-width: 550px) {
      width: 50px;
      height: 16px;
    }

    @media (max-width: 320px) {
      width: 40px;
      height: 13px;
    }

  }

}

</style>
