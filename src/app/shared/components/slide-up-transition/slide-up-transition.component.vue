<template>
  <transition
    name="SlideUp"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts" src="./slide-up-transition.component.ts"></script>
<style lang="scss" scoped src="./slide-up-transition.component.scss"></style>
