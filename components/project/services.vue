<template>
  <section class="services">

      <h2 class="services__title">Виды ремонтных работ, которые предоставляет наш сервис</h2>
      <p class="services__subtitle">В нашем сервисе, вы всегда найдете выгодные цены на профессиональый
        ремонт коробок передач DSG6, DSG7, S-Tronic в Санкт - Петербурге.
      </p>
      <div class="services__gallery">
        <div class="services__sliders-container">

        </div>
      </div>
      <p class="services__text">Звоните, спрашивайте, интересуйтесь доступными для вас привелегиями и ценами.
      </p>

  </section>
</template>

<script>
export default {
  name: "services"
}
</script>

<style scoped lang="scss">
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #070A2A;
  min-height: 948px;


  &__title {
    max-width: 1006px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 96px 0 48px 0;

  }

  &__subtitle {
    max-width: 959px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 64px;
  }

  &__gallery {

  }

  &__sliders-container {
    min-height: 260px;
    width: 1384px;
    outline: 5px solid red;

  }

  &__text {
    max-width: 640px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin: 64px 0 192px 0;

  }

}


</style>
