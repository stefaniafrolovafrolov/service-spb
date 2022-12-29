<template>
  <section class="reviews">

      <h2 class="reviews__title">Почему нам доверяют
        наши&nbsp;клиенты?</h2>
      <p class="reviews__subtitle">Мы заботимся о каждом клиенте и не навязываем лишние услуги
      </p>
      <div class="reviews__gallery">
        <div class="reviews__sliders-container">

        </div>
      </div>

  </section>
</template>

<script>
export default {
  name: "reviews"
}
</script>

<style scoped lang="scss">
.reviews {
  min-height: 846px;
  background-image: url("/reviews-fon.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  &__title {
    max-width: 900px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-bottom: 48px;


  }

  &__subtitle {
    max-width: 788px;
    font-family: 'Inter', "Arial", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 19px;

  }

  &__gallery {

  }

  &__sliders-container {
    outline: 5px solid red;
    width: 1136px;
    min-height: 345px;

  }


}
</style>
