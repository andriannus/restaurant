import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import { XAppBar } from "@/app/shared/components/app-bar";
import { XFooter } from "@/app/shared/components/footer";

export default defineComponent({
  name: "App",

  components: {
    XAppBar,
    RouterView,
    XFooter,
  },
});
