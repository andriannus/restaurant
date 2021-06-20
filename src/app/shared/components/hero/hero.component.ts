import { defineComponent } from "vue";

import HeroImage from "@/app/shared/assets/images/hero-image.jpg";

export default defineComponent({
  name: "HeroComponent",

  setup() {
    return { HeroImage };
  },
});
