<template>
  <div class="slider-base" :id="sliderId" :style="{ width: width }">
    <div style="position: relative" :class="{ 'd-flex': flex, 'grid-base': grid }">
      <template v-if="componentNavExtLeft">
        <component
          :is="componentNavExtLeft"
          :slider-id="sliderId"
          @navigation="setNavigation = $event"
          @prevClick="prevClick"
        />
      </template>

      <div :id="swiperId" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, itemIndex) in items" :key="item.id">
            <template v-if="componentSlide">
              <component
                :is="componentSlide"
                :item-index="itemIndex"
                :items-length="items.length"
                :data-in-slide="dataInSlide"
                :active-slide-index="activeSlideIndex"
                :img-url="item.imgUrl"
                :item="item"
                @click="$emit('click-slide', $event)"
                @active="activeSlide"
              />
            </template>

            <!--            <template v-if="!componentSlide">-->
            <!--              <div class="slider-base__only-img">-->
            <!--                <img :src="item.imgUrl" alt="">-->
            <!--              </div>-->
            <!--            </template>-->
          </div>
        </div>

        <template v-if="componentPag">
          <component
            :is="componentPag"
            :pagPosition="pagPosition"
            @pagination="setPagination = $event"
          />
        </template>

        <template v-if="componentNav">
          <component
            :is="componentNav"
            :slider-id="sliderId"
            @navigation="setNavigation = $event"
          />
        </template>
      </div>

      <template v-if="componentNavExtRight">
        <component
          :is="componentNavExtRight"
          :slider-id="sliderId"
          @navigation="setNavigation = $event"
        />
      </template>
    </div>

    <template v-if="componentPagExt">
      <component :is="componentPagExt" :slider-id="sliderId" @pagination="setPagination = $event" />
    </template>

    <template v-if="componentNavExt">
      <component :is="componentNavExt" :slider-id="sliderId" @navigation="setNavigation = $event" />
      <!--                 @prevClick="prevClick"
                       @nextClick="nextClick"-->
    </template>
  </div>
</template>

<script>
// https://swiperjs.com/swiper-api#method-swiper-slideNext
// https://swiperjs.com/demos
// https://github.com/nolimits4web/Swiper/tree/master/demos/
// https://github.com/nolimits4web/swiper/blob/master/demos/270-mousewheel-control.html

import Swiper from 'swiper/swiper-bundle.esm.js'
import 'swiper/swiper-bundle.min.css'
// ----
import slideServices from "../carousel/slide/slide-services"
import slideReviews from "../carousel/slide/slide-reviews"
// ----
import navExtSlideServices from "../carousel/nav/nav-ext-slide-services"
import navExtSliderReviews from "../carousel/nav/nav-ext-slide-reviews"
// ----


// `https://picsum.photos/300/300?random=${i}`
export default {
  name: 'carousel',
  // todo-max: сделать динамическую подгрузку компонентов
  components: {
    slideServices,
    slideReviews,
    // ----
    navExtSlideServices,
    navExtSliderReviews
    // ----

  },
  props: {
    sliderId: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
    },
    width: {
      type: String,
      default: 'auto',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    dataInSlide: {
      type: Object,
      default: () => ({}),
    },
    grid: {
      type: Boolean,
      default: false,
    },
    flex: {
      type: Boolean,
      default: false,
    },
    pagPosition: {
      type: String,
      default: 'center',
    },
    componentSlide: String,
    componentPag: String,
    componentPagExt: String,
    componentNav: String,
    componentNavExt: String,
    componentNavExtLeft: String,
    componentNavExtRight: String,
  },
  data: () => ({
    swiper: null,
    swiperExtButtonsPrev: null,
    swiperExtButtonsNext: null,
    setPagination: null,
    setNavigation: null,
    activeSlideIndex: 0,
  }),
  mounted() {
    this.$emit('activeSlidе', this.realIndex)
    if (this.setPagination) {
      this.options.pagination = this.setPagination
    }
    if (this.setNavigation) {
      this.options.navigation = this.setNavigation
    }
    this.swiper = new Swiper(`#${this.swiperId}`, this.options)

    let _th = this
    this.swiper.on('slideChange', function () {
      _th.activeSlideIndex = this.realIndex
      _th.$emit('activeSlidе', this.realIndex)
    })
  },

  computed: {
    swiperId() {
      return this.sliderId + '_swiper'
    },
  },
  methods: {
    prevClick() {
      this.swiper.slidePrev()
    },
    nextClick() {
      this.swiper.slideNext()
    },
    activeSlide(active) {
      this.$emit('active', active)
      console.log(active)
    },
    itemFalse(itemFalse) {
      this.$emit('itemFalse', itemFalse)
    },
  },
}
</script>

<style lang="scss">
.slider-base {
  &__only-img {
    img {
      -webkit-user-drag: none;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }
}

.grid-base {
  display: grid;
  grid-template-columns: 0 1fr 0;
}
</style>
