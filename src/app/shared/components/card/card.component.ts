import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",

  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
  },
});
