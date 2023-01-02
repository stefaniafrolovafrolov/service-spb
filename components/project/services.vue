<template>
  <section class="services">
    <h2 class="services__title">Виды ремонтных работ, которые предоставляет наш сервис</h2>
    <p class="services__subtitle">В нашем сервисе, вы всегда найдете выгодные цены на профессиональый
      ремонт коробок передач DSG6, DSG7, S-Tronic в Санкт - Петербурге.
    </p>
    <div class="services__gallery">
      <div class="services__sliders-container">
        <carousel slider-id="slider-one"
                  :items="items"
                  component-slide="slide-services"
                  component-nav-ext="nav-ext-slide-services"
                  :options='{ grabCursor: true,
          slidesPerView: 4,
          loop: true,
          spaceBetween: 28,
           autoplay: {
      delay: 4000,   // пауза между перелистыванием
      disableOnInteraction: false, // вмешательство, если ложь, то слайдер не будет останавливаться после вмешательства
    },}
'/>
      </div>
    </div>
    <p class="services__text">Звоните, спрашивайте, интересуйтесь доступными для вас привелегиями и ценами.
    </p>

  </section>
</template>

<script>
import carousel from "../carousel/carousel";

export default {
  name: "services",
  components: {
    carousel
  },
  data: () => ({
    items: [
      {id: 1, src: "/slide-one-image1.jpg", title: "Замена сцепления <strong>Powershift DCT250</strong>"},
      {
        id: 2, src: "/slide-one-image2.jpg", title: "Замена сцепления \n" +
          "<strong>DSG S Tronic 0B5</strong>"
      },
      {
        id: 3, src: "/slide-one-image3.jpg", title: "Замена сцепления \n" +
          "<strong>DSG 7</strong>"
      },
      {
        id: 4, src: "/slide-one-image4.jpg", title: "Замена сцепления\n" +
          "<strong>DSG 6</strong>"
      },

    ]
  })
}
</script>

<style scoped lang="scss">
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #070A2A;
  height: 100%;

  &__title {
    max-width: 1006px;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 116px 0 28px 0;
  }

  &__subtitle {
    max-width: 959px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 64px;
  }

  &__gallery {
    height: 100%;
    max-width: 1384px;
  }

  &__sliders-container {
    max-width: 1148px;
  }

  &__text {
    max-width: 640px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    margin: 64px 0 192px 0;
  }

}


</style>
