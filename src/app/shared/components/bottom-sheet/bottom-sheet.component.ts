import { defineComponent, reactive, watch } from "vue";

import { CLIP_CLASS, HTML_TAG } from "./bottom-sheet.constant";
import { BottomSheetComponentState } from "./bottom-sheet.model";

import { XFadeTransition } from "@/app/shared/components/fade-transition";
import { XSlideUpTransition } from "@/app/shared/components/slide-up-transition";

export default defineComponent({
  name: "BottomSheetComponent",

  components: {
    XFadeTransition,
    XSlideUpTransition,
  },

  props: {
    dismissible: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: null,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const state = reactive<BottomSheetComponentState>({
      html: document.querySelector(HTML_TAG) as HTMLHtmlElement,
      isBottomSheetDialogShown: false,
      isBottomSheetShown: false,
    });

    watch(
      () => props.modelValue,
      (isShown: boolean) => {
        if (isShown) {
          showBottomSheet();
          clipHtml();

          return;
        }

        hideBottomSheetDialog();
        unclipHtml();
      },
    );

    function closeBottomSheet(): void {
      emit("update:modelValue", !props.dismissible);
    }

    function onClickBackground(): void {
      if (props.persistent) return;
      closeBottomSheet();
    }

    function stopParentEvent(e: Event): void {
      e.stopPropagation();
    }

    function isHtmlClipped(): boolean {
      if (!state.html) return false;
      return state.html.classList.contains(CLIP_CLASS);
    }

    function clipHtml(): void {
      if (!isHtmlClipped()) {
        state.html?.classList.add(CLIP_CLASS);
      }
    }

    function unclipHtml(): void {
      if (isHtmlClipped()) {
        state.html?.classList.remove(CLIP_CLASS);
      }
    }

    function showBottomSheet(): void {
      state.isBottomSheetShown = true;
    }

    function hideBottomSheet(): void {
      state.isBottomSheetShown = false;
    }

    function showBottomSheetDialog(): void {
      state.isBottomSheetDialogShown = true;
    }

    function hideBottomSheetDialog(): void {
      state.isBottomSheetDialogShown = false;
    }

    return {
      closeBottomSheet,
      hideBottomSheet,
      onClickBackground,
      showBottomSheetDialog,
      state,
      stopParentEvent,
    };
  },
});
