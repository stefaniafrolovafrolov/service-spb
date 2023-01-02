<template>
  <section class="main-block">
    <article class="main-block__container">
      <h1 class="main-block__title">Профессиональный ремонт DSG
        в&nbsp;Cанкт - Петербурге</h1>
      <p class="main-block__subtitle">Бесплатные бонусы при ремонте DSG: эвакуатор,
        диагностика, адаптация
      </p>
      <div class="main-block__wrapper-button">
        <button class="main-block__button-contact">Связаться с нами</button>
        <button class="main-block__button-information">Перейти к списку услуг</button>
      </div>
    </article>
   <!-- <img class="whatsapp-button" src="/whatsapp%20(2)%201.svg" alt="кнопка ватсапа">-->
    <a href="https://api.whatsapp.com/send?phone=79539979283" target="_blank"
       rel="noopener noreferrer"><div class="whatsapp-button"><i class="fa fa-whatsapp"></i></div></a>
  </section>


</template>

<script>
export default {
  name: "main-block"
}
</script>

<style scoped lang="scss">
.main-block {
  min-height: 900px;
  background-image: url("static/main-block.png");

  @keyframes animate
  {
    0%
    {
      transform: scale(0.5);
      opacity: 0;
    }
    50%
    {
      opacity: 1;
    }
    100%
    {
      transform: scale(1.2);
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
    background-image: url("/whatsapp (2) 1.svg");
    position: fixed;
    z-index: 999;
    top: 614px;
    right: 103px;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
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
  }

  .whatsapp-button:after{
    animation-delay: .5s;
  }



  &__container {
    display: flex;
    flex-direction: column;
    max-width: 1152px;
    margin-left: 199px;
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
  }

  &__wrapper-button {
    display: flex;
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
  }

}


</style>
