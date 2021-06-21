import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faHeart,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { App, router } from "@/app";

const app = createApp(App);

library.add(faBars, faHeart, faHome, faInfoCircle);

app.use(router);
app.component("x-icon", FontAwesomeIcon);
app.mount("#app");
