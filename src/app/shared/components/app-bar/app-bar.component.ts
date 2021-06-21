import { defineComponent, onMounted, onUnmounted, reactive } from "vue";

import { XBottomSheet } from "@/app/shared/components/bottom-sheet";
import { XSpacer } from "@/app/shared/components/spacer";

export default defineComponent({
  name: "AppBarComponent",

  components: {
    XBottomSheet,
    XSpacer,
  },

  setup() {
    const state = reactive({
      isBottomSheetShown: false,
    });

    onMounted((): void => {
      window.addEventListener("scroll", onPageScroll);
    });

    onUnmounted((): void => {
      window.removeEventListener("scroll", onPageScroll);
    });

    function hasScrolled(): boolean {
      const { body, documentElement } = document;
      const isValidBody = body.scrollTop > 0;
      const isValidDocumentElement = documentElement.scrollTop > 0;

      return isValidBody || isValidDocumentElement;
    }

    function onPageScroll(): void {
      const element = document.querySelector(".AppBar") as HTMLHtmlElement;

      if (!hasScrolled()) {
        return element?.classList.remove("is-active");
      }

      element?.classList.add("is-active");
    }

    function toggleBottomSheet(): void {
      state.isBottomSheetShown = !state.isBottomSheetShown;
    }

    function openPersonalWeb(): void {
      window.open("https://andriannus.id", "_blank", "noopener noreferrer");
    }

    return { openPersonalWeb, state, toggleBottomSheet };
  },
});
