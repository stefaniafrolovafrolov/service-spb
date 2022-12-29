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


  &__container {
    display: flex;
    flex-direction: column;
    max-width: 1152px;
    margin-left: 199px;
  }

  &__title {
    max-width: 1152px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 38px;
    margin-top: 152px;
  }

  &__subtitle {
    font-family: 'Inter', "Arial", sans-serif;
    max-width: 794px;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    align-self: start;
    margin-bottom: 80px;
  }

  &__wrapper-button {
    display: flex;
  }

  &__button-contact {
    border: none;
    font-family: 'Inter', "Arial", sans-serif;
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
    font-family: 'Inter', "Arial", sans-serif;
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
