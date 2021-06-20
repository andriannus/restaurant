import { defineComponent } from "vue";

import { XCard } from "@/app/shared/components/card";
import { XHero } from "@/app/shared/components/hero";
import { RESTAURANTS } from "@/app/shared/constants/data.constant";

export default defineComponent({
  name: "Home",

  components: {
    XCard,
    XHero,
  },

  setup() {
    return { RESTAURANTS };
  },
});
