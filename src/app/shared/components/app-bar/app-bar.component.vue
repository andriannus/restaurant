<template>
  <nav class="AppBar">
    <button class="AppBar-button" @click="toggleBottomSheet">
      <span class="AppBar-icon">=</span>
    </button>

    <p class="AppBar-title">We The Food</p>

    <x-spacer></x-spacer>

    <ul class="AppBar-actions">
      <li class="AppBar-action">Home</li>
      <li class="AppBar-action">Favorite</li>
      <li class="AppBar-action">About</li>
    </ul>
  </nav>

  <x-bottom-sheet v-model="state.isBottomSheetShown" dismissible>
    <ul class="BottomDrawer">
      <li class="BottomDrawer-action">Home</li>
      <li class="BottomDrawer-action">Favorite</li>
      <li class="BottomDrawer-action">About</li>
    </ul>
  </x-bottom-sheet>
</template>

<script lang="ts" src="./app-bar.component.ts"></script>
<style lang="scss" scoped src="./app-bar.component.scss"></style>
