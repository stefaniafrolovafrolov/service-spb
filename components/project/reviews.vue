<template>
  <section class="reviews">

    <h2 class="reviews__title">Почему нам доверяют
      наши&nbsp;клиенты?</h2>
    <p class="reviews__subtitle">Мы заботимся о каждом клиенте и не навязываем лишние услуги
    </p>
    <div class="reviews__gallery">
      <div class="reviews__sliders-container">
        <carousel slider-id="slider-two"
                  :items="items"
                  component-slide="slide-reviews"
                  component-nav-ext="nav-ext-slide-reviews"
                  :options='{ grabCursor: true,
          slidesPerView: 1,
          loop: true,
          spaceBetween: 28,
           autoplay: {
      delay: 4000,   // пауза между перелистыванием
      disableOnInteraction: false, // вмешательство, если ложь, то слайдер не будет останавливаться после вмешательства
    },}
'/>
      </div>
    </div>

  </section>
</template>

<script>
import carousel from "../carousel/carousel";

export default {
  name: "reviews",
  components: {
    carousel
  },
  data: () => ({
    items: [
      {
        id: 1, number: "6 февраля 2021", author: "Екатерина К.", src: "/slide-two-image-star.svg", text: "Отличная" +
          " автомастерская. Благодарю мастера и по совместительству менеджера и владельца Андрея и его команду" +
          " профессиональных автомехаников за помощь  и проделанную работу. Ребята отлично разбираются в вопросах" +
          " АКПП, КПП, РКП    и связанных с ними агрегатов. В моем случае замена сцепления и масла коробки передач," +
          " также прочистили дроссельную заслонку и поменяли свечи. В общем отличная мастерская, очень рекомендую\n"
      }
    ]
  })
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
    width: 1136px;
    min-height: 345px;
  }

  &__sliders-container {
    margin: 0 auto;

    max-width: 900px;
    height: 345px;
    background: #FFFFFF;
    border: 4px solid #FF0000;
    border-radius: 10px;


  }


}
</style>
