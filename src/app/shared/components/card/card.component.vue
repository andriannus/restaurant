<template>
  <div class="Card">
    <div class="Card-media">
      <slot name="media"></slot>
    </div>

    <div class="Card-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./card.component.ts"></script>
<style lang="scss" scoped src="./card.component.scss"></style>
