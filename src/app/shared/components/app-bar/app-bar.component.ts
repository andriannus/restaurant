import { defineComponent, reactive } from "vue";

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

    function toggleBottomSheet(): void {
      state.isBottomSheetShown = !state.isBottomSheetShown;
    }

    return { state, toggleBottomSheet };
  },
});
