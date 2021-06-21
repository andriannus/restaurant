<template>
  <router-link v-if="link" class="Card" :class="{ 'is-hover': hover }" :to="to">
    <div class="Card-media">
      <slot name="media"></slot>
    </div>

    <div class="Card-text">
      <slot name="text"></slot>
    </div>
  </router-link>

  <div v-else class="Card" :class="{ 'is-hover': hover }">
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
