<template>
  <section class="main-block">
    <article class="main-block__container">
      <h1 class="main-block__title">Профессиональный ремонт DSG
        в&nbsp;Cанкт - Петербурге</h1>
      <p class="main-block__subtitle">Бесплатные бонусы при ремонте DSG: эвакуатор,
        диагностика, адаптация
      </p>

      <div class="main-block__wrapper-button">
        <div v-for="item in items" :key="item.id">
          <a style="all: unset" :href="item.url">
            <div class="main-block__style-button" @mouseenter="changeBtn = item.id" :class="{ 'main-block__button-contact' : item.id === 1,
      'main-block__button-information' : item.id === 2,
      'active' : changeBtn === item.id }" @mouseleave="changeBtn = ''"> {{ item.title }}
            </div>
          </a>
        </div>
      </div>
    </article>
    <a href="https://api.whatsapp.com/send?phone=79539979283" target="_blank"
       rel="noopener noreferrer">
      <div class="whatsapp-button"><i class="fa fa-whatsapp"></i></div>
    </a>
  </section>


</template>

<script>
export default {
  name: "main-block",
  data: () => ({
    changeBtn: "", //отсутствует активная кнопка при создании экземпляра, либо установить начальную

    items: [
      {id: 1, title: "Связаться с нами", url: "tel:+79539979283"},
      {id: 2, title: "Перейти к списку услуг", url: "#3"},
    ]
  }),


}
</script>

<style scoped lang="scss">
.main-block {
  min-height: 900px;
  background-image: url("static/main-block-min.png");
  background-size: cover;
  background-position: center;


  .active {
    background: #FF0000;
    box-shadow: 0px 0px 25px #FFFFFF;
  }

  &__style-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  @media (max-width: 1440px) {
    min-height: 730px;
  }

  @media (max-width: 1280px) {
    min-height: 657px;
  }

  @media (max-width: 1024px) {
    min-height: 519px;
  }

  @media (max-width: 768px) {
    min-height: 584px;
  }

  @media (max-width: 695px) {
    min-height: 460px;
  }

  @media (max-width: 320px) {
    min-height: 396px;

  }

  @keyframes animate {
    0% {
      transform: scale(0.3);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes radial-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(241, 135, 69, 0.5);
    }
    100% {
      box-shadow: 0 0 0 40px rgba(207, 241, 207, 0);
    }
  }

  .whatsapp-button {
    background-image: url("/whatsapp-1920.svg");
    position: fixed;
    z-index: 999;
    top: 614px;
    right: 103px;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    display: none;


    @media (max-width: 1920px) {
      display: block;
      right: 133px;
      top: 380px;
    }

    @media (max-width: 1280px) {
      background-image: url("/whatsapp-1280.svg");
      background-size: cover;
      top: 445px;
      right: 40px;
      width: 80px;
      height: 80px;
    }

    @media (max-width: 1024px) {
      top: 376px;
      right: 70px;
    }

    @media (max-width: 550px) {
      width: 100px;
      height: 100px;
      right: 30px;
      top: 82%;
    }

    @media (max-width: 475px) {
      right: 15px;
      top: 76%;
    }

  }

  .whatsapp-button:before,
  .whatsapp-button:after {
    content: " ";
    display: block;
    position: absolute;
    border: 2px solid #25D366; /*цвет анимированных волн от кнопки*/
    left: -30px;
    right: -30px;
    top: -30px;
    bottom: -30px;
    border-radius: 50%;
    animation: animate 1.5s linear infinite;
    opacity: 0;
    backface-visibility: hidden;

    @media (max-width: 475px) {
      border: 1px solid #25D366; /*цвет анимированных волн от кнопки*/
      left: -1px;
      right: -1px;
      top: -1px;
      bottom: -1px;
    }

  }

  .whatsapp-button:after {
    animation-delay: .5s;
  }


  &__container {
    padding: 0;
    display: flex;
    flex-direction: column;
    max-width: 1152px;
    margin-left: 199px;

    @media (max-width: 1440px) {
      margin-left: 100px;
    }

    @media (max-width: 1280px) {
      margin-left: 90px;
    }

    @media (max-width: 1024px) {
      margin-left: 40px;
    }

    @media (max-width: 768px) {
      margin: 0 auto;
      max-width: 674px;
    }

    @media (max-width: 695px) {
      max-width: 608px;
    }

    @media (max-width: 620px) {
      max-width: 520px;
    }

    @media (max-width: 530px) {
      max-width: 90%;
    }

    @media (max-width: 450px) {
      max-width: 272px;
    }

  }

  &__title {
    max-width: 1152px;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 35px;
    margin-top: 152px;

    @media (max-width: 1440px) {
      max-width: 910px;
      margin-bottom: 25px;
      margin-top: 124px;
      font-size: 54px;
      line-height: 65px;
    }

    @media (max-width: 1280px) {
      max-width: 810px;
      font-size: 48px;
      line-height: 58px;
      margin-top: 111px;
      margin-bottom: 20px;
    }

    @media (max-width: 1024px) {
      max-width: 728px;
      font-size: 43.2px;
      line-height: 52px;
      margin-top: 77px;
      margin-bottom: 17px;
    }

    @media (max-width: 768px) {
      max-width: 674px;
    }

    @media (max-width: 695px) {
      max-width: 608px;
      font-size: 35px;
      line-height: 39px;
      margin-top: 52px;
      margin-bottom: 26px;
    }

    @media (max-width: 620px) {
      max-width: 472px;
      font-size: 30px;
      line-height: 37px;
      margin-top: 30px;
      margin-bottom: 20px;
    }

    @media (max-width: 530px) {
      font-size: 27px;
      line-height: 32px;
    }

    @media (max-width: 460px) {
      max-width: 330px;
      font-size: 20px;
      line-height: 25px;
    }

    @media (max-width: 320px) {
      max-width: 272px;
      font-size: 24px;
      line-height: 29px;
      margin-top: 4px;
      margin-bottom: 5px;
    }

  }

  &__subtitle {
    max-width: 794px;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    align-self: start;
    margin-bottom: 77px;

    @media (max-width: 1440px) {
      margin-bottom: 55px;
      font-size: 32px;
      line-height: 39px;
    }

    @media (max-width: 1280px) {
      margin-bottom: 50px;
      max-width: 625px;
      font-size: 28px;
      line-height: 34px;
    }

    @media (max-width: 1024px) {
      max-width: 563.13px;
      font-size: 25px;
      line-height: 31px;
      margin-bottom: 41px;
    }

    @media (max-width: 695px) {
      max-width: 523.13px;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 45px;
    }

    @media (max-width: 620px) {
      max-width: 380px;
      font-size: 17px;
      line-height: 22px;
      margin-bottom: 30px;
    }

    @media (max-width: 530px) {
      font-size: 15px;
      line-height: 19px;
    }

    @media (max-width: 460px) {
      max-width: 360px;
      font-size: 14px;
      line-height: 17px;
    }

    @media (max-width: 320px) {
      max-width: 271px;
      margin-bottom: 10px;
    }

  }

  &__wrapper-button {
    display: flex;

    @media (max-width: 460px) {
      flex-direction: column;
    }

    @media (max-width: 320px) {
      margin-bottom: 140px;
    }

  }

  &__button-contact {
    border: none;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    width: 253px;
    height: 71px;
    background: #FF0000;
    border-radius: 10px;
    align-self: start;
    margin-right: 24px;

    &:hover {
      background: #C60000;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    @media (max-width: 1440px) {
      width: 210px;
      height: 56px;
      font-size: 20px;
      line-height: 24px;
      margin-right: 20px;
    }

    @media (max-width: 1280px) {
      width: 188px;
      height: 52px;
      margin-right: 17px;
      font-size: 18px;
      line-height: 22px;
    }

    @media (max-width: 1024px) {
      width: 168px;
      height: 46px;
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 620px) {
      width: 150px;
      height: 40px;
      font-size: 13px;
      line-height: 17px;
      margin-right: 10px;
    }

    @media (max-width: 460px) {
      width: 271px;
      height: 46px;
      margin-bottom: 7px;

    }


  }

  &__button-information {
    border: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    opacity: 0.8;
    width: 324px;
    height: 71px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    align-self: start;

    &:hover {
      background: #C60000;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    @media (max-width: 1440px) {
      width: 263px;
      height: 58px;
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 1280px) {
      width: 240px;
      height: 52px;
      font-size: 18px;
      line-height: 22px;
    }

    @media (max-width: 1024px) {
      width: 210px;
      height: 46px;
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 620px) {
      width: 220px;
      height: 40px;
      font-size: 13px;
      line-height: 17px;
    }

    @media (max-width: 460px) {
      width: 271px;
      height: 46px;
    }

  }

}


</style>
