<template>
  <header class="v-header">


   <!-- <div class="contain">
      <div class="contain__mobile-menu">
        <div class="contain__mobile-menu__logo"></div>
        <div class="contain__mobile-menu__button"></div>
      </div>
    </div>-->


    <div class="container media-wrapper">
      <div style="display: block">
      <div class="v-header__header-logo"></div>
      </div>
      <nav class="v-header__navigation">
        <ul class="v-header__list">
          <li class="v-header__list-item" v-for="item in items" :key="item.id">{{ item.title }}</li>
        </ul>
      </nav>
      <div class="v-header__contacts">
        <a class="v-header__phone" href="tel:+79539979283">+7 (953) 997 92 83</a>
        <p class="v-header__paragraph">Заказать звонок</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-header",
  data: () => ({
    items: [
      {id: 1, title: "О нас"},
      {id: 2, title: "Услуги"},
      {id: 3, title: "Цены"},
      {id: 4, title: "Отзывы"},
      {id: 5, title: "Контакты"},
    ],
  })
}
</script>

<style scoped lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  background: #070A2A;

  /*.contain {

    padding-top: 12px;
    max-width: 580px;
    padding-bottom: 14px;


  &__mobile-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      width: 70px;
      height: 50px;
      background-image: url("/logo-header-320.svg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    &__button {
      width: 25px;
      height: 25px;
      background-image: url("/header-menu-320.svg");
      background-size: cover;
      background-repeat: no-repeat;
    }

  }

    @media (max-width: 1920px) {
      display: none;
    }

    @media (max-width: 630px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }*/

  .media-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 630px) {
      /*display: none;*/
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
      background-image: url("/logo-header-1420.svg");
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

    @media (max-width: 600px) {
      /* width: 70px;
       height: 50px;
       background-image: url("/logo-header-320.svg");
       background-size: contain;
       background-repeat: no-repeat;*/
    }
  }

  &__navigation {
    align-items: center;
  }

  &__list {
    width: 614px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      width: 404px;
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
      padding-left: 30px;

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

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 19px;
      }

      @media (max-width: 600px) {
        font-size: 16px;
        line-height: 19px;
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


  &__phone {
    text-decoration: none;
    max-width: 208px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    align-self: end;

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

    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
      font-size: 12.96px;
      line-height: 16px;
    }


  }

}


</style>
