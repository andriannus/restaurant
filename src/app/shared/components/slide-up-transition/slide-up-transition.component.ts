import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideUpTransitionComponent",

  setup(_, { emit }) {
    const onBeforeEnter = () => emit("before-enter");
    const onEnter = () => emit("enter");
    const onAfterEnter = () => emit("after-enter");
    const onEnterCancelled = () => emit("enter-cancelled");
    const onBeforeLeave = () => emit("before-leave");
    const onLeave = () => emit("leave");
    const onAfterLeave = () => emit("after-leave");
    const onLeaveCancelled = () => emit("leave-cancelled");

    return {
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onEnterCancelled,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      onLeaveCancelled,
    };
  },
});
