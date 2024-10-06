<template>
  <div class="overlay" style="background: #070A2A;">
  <header class="v-header">
    <div class="container-2">
      <img class="mobile" src="/logo-header-320.svg" alt="логотип сервиса">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox"/>
        <div class="wrapper-menu-btn"></div>
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li><a class="menu__item" href="#1">О нас</a></li>
          <li><a class="menu__item" href="#2">Услуги</a></li>
          <li><a class="menu__item" href="#3">Цены</a></li>
          <li><a class="menu__item" href="#4">Отзывы</a></li>
          <li><a class="menu__item" href="#5">Контакты</a></li>
        </ul>
      </div>
    </div>


    <div class="container media-wrapper">
      <div style="display: block">
        <div class="v-header__header-logo"></div>
      </div>


      <nav class="v-header__navigation">
        <ul class="v-header__list">
          <li class="v-header__list-item" v-for="item in items" :key="item.id" @click="changeBtnTwo = item.id" :class="{ 'v-header__list-item' : item.id === 1,

      'v-header__list-item' : item.id === 2,
      'v-header__list-item' : item.id === 3,
      'v-header__list-item' : item.id === 4,
      'v-header__list-item' : item.id === 5,
      'active-two' : changeBtnTwo === item.id }"><a style="all: unset" :href="item.url">{{ item.title }} </a></li>

        </ul>
      </nav>


      <div class="v-header__contacts">
        <div v-for="phone in phones" :key="phone.id" @click="changeBtn = phone.id" :class="{ 'v-header__phone' : phone.id === 1,
        'v-header__paragraph' : phone.id === 2,
      'v-header__active' : changeBtn === phone.id }">
          <a href="tel:+79539979283">{{ phone.title }}</a>

        </div>
      </div>


    </div>

  </header>
  </div>
</template>

<script>
export default {
  name: "v-header",
  data: () => ({
    changeBtnTwo: "", //отсутствует активная кнопка при создании экземпляра, либо установить начальную
    items: [
      {id: 1, title: "О нас", url: "#1"},
      {id: 2, title: "Услуги", url: "#2"},
      {id: 3, title: "Цены", url: "#3"},
      {id: 4, title: "Отзывы", url: "#4"},
      {id: 5, title: "Контакты", url: "#5"},
    ],
    phones: [
      {id: 1, title: "+7 (953) 997 92 83"},
      {id: 2, title: "Позвонить"},
    ],
    changeBtn: "",//отсутствует активная кнопка при создании экземпляра, либо установить начальную
  })
}
</script>

<style scoped lang="scss">
.v-header {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: #070A2A;

  @media (max-width: 575px) {
    min-height: 86px;
  }


  .active-two {
    color: #FF0000;
    border-bottom: 1px solid #FF0000;
  }

  .container-2 {
    display: none;

    @media (max-width: 575px) {
      display: flex;
      align-items: center;
    }

    .mobile {
      width: 70px;
      height: 50px;
      margin-left: 40px;

      @media (max-width: 320px) {
        margin-left: 20px;
        height: 45px;
      }

    }

    #menu__toggle {
      display: none;
      opacity: 0;
    }

    #menu__toggle:checked ~ .menu__btn > span {
      transform: rotate(45deg);
    }

    #menu__toggle:checked ~ .menu__btn > span::before {
      top: 0;
      transform: rotate(0);
    }

    #menu__toggle:checked ~ .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }

    #menu__toggle:checked ~ .menu__box {
      visibility: visible;
      left: 0;
      transition: 0.6s ease-in-out;
    }

    .wrapper-menu-btn {
      position: fixed;
      top: 28px;
      left: 87.6%;
      z-index: 3;
      background: #070A2A;
      width: 24px;
      height: 27px;
      border-radius: 3px;

      @media (max-width: 320px) {
        top: 25px;
        left: 83.5%;
      }
    }

    .menu__btn {
      display: flex;
      align-items: center;
      position: fixed;
      top: 35px;
      left: 80%;
      width: 20px;
      height: 12px;
      cursor: pointer;
      z-index: 9;

      @media (max-width: 575px) {
        left: 88%;
      }

      @media (max-width: 320px) {
        top: 32px;
        left: 84%;
      }

    }

    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background: #FFFFFF;
      transition-duration: .25s;
    }

    .menu__btn > span::before {
      content: '';
      top: -8px;
    }

    .menu__btn > span::after {
      content: '';
      top: 8px;
    }

    .menu__box {
      display: block;
      position: fixed;
      visibility: hidden;
      top: 0;
      left: -100%;
      width: 100%;
      height: 329px;
      z-index: 5;
      margin: 0;
      padding: 60px 0 60px 0;
      list-style: none;
      background: #000327;
      transition-duration: .25s;
      opacity: 0.97;
    }

    .menu__item {
      display: block;
      padding: 8px 0 8px 0;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #FFFFFF;
      text-decoration: none;
      transition-duration: .25s;
    }

    .menu__item:hover {
      background: #FF0000;
    }

  }

  .media-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 575px) {
      display: none;
    }

  }

  &__header-logo {
    display: block;
    background-image: url("/logo-header.svg");
    width: 146px;
    height: 104px;

    @media (max-width: 1440px) {
      width: 120px;
      height: 70px;
      background-image: url("logo-header-1420.svg");
      background-size: 100% 100%;
    }

    @media (max-width: 1280px) {
      width: 106px;
      height: 65px;
      background-image: url("/logo-header-1280.svg");
    }

    @media (max-width: 1024px) {
      width: 96px;
      height: 60px;
      background-image: url("/logo-header-1024.svg");
      background-size: 100% 100%;
    }

    @media (max-width: 768px) {
      width: 96px;
      height: 56px;
      background-image: url("/logo-header-768.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }

    @media (max-width: 728px) {
      width: 70px;
      height: 50px;
      background-image: url("/logo-header-320.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

  }

  &__navigation {
    align-items: center;
  }

  &__list {
    width: 614px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1440px) {
      width: 500px;
    }

    @media (max-width: 1280px) {
      width: 450px;
    }

    @media (max-width: 1024px) {
      padding-left: 18px;
      width: 407px;
    }

    @media (max-width: 728px) {
      width: 340px;
    }


    &-item {
      list-style: none;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #FFFFFF;
      border: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid #FF0000;
        transition: 0.5s ease-in-out;
        cursor: pointer;
      }

      @media (max-width: 1440px) {
        font-size: 20px;
        line-height: 24px;
      }

      @media (max-width: 1280px) {
        font-size: 18px;
        line-height: 22px;
      }

      @media (max-width: 1024px) {
        font-size: 16px;
        line-height: 19px;
        padding-left: 0;
      }

      @media (max-width: 600px) {
        padding-left: 10px;
      }

    }

  }

  &__contacts {
    max-width: 208px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1440px) {
      font-size: 20px;
      line-height: 24px;
    }

  }

  a {
    all: unset;
  }

  &__phone {
    text-decoration: none;
    max-width: 208px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    align-self: end;

    &:hover {
      box-shadow: 0px 0px 25px #FFFFFF;
      background-color: rgba(255, 255, 255, 0.5);
      filter: blur(0.97px);
      border-radius: 50%;
      width: fit-content;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    @media (max-width: 1440px) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 1280px) {
      font-size: 18px;
      line-height: 22px;
    }

    @media (max-width: 1024px) {
      font-size: 16.2px;
      line-height: 20px;
    }

  }

  &__paragraph {
    max-width: 208px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    align-self: end;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      box-shadow: 0px 0px 25px #FFFFFF;
      background-color: rgba(255, 255, 255, 0.5);
      filter: blur(0.9px);
      border-radius: 50%;
      width: fit-content;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    @media (max-width: 1440px) {
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 1280px) {
      font-size: 14.4px;
      line-height: 17px;
    }

    @media (max-width: 1024px) {
      font-size: 12.96px;
      line-height: 16px;
    }

  }

}


</style>
