export default {
  name: 'mixin-slide',
  props: {
    item: {
      type: Object,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    itemsLength: {
      type: Number,
      required: true,
    },
    activeSlideIndex: {
      type: Number,
      required: true,
    },
    dataInSlide: {
      type: Object,
      required: true,
    },
  },
}
