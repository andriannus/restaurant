<template>
  <nav class="AppBar">
    <button class="AppBar-button" @click="toggleBottomSheet">
      <span class="AppBar-icon">
        <x-icon icon="bars"></x-icon>
      </span>
    </button>

    <p class="AppBar-title">We The Food</p>

    <x-spacer></x-spacer>

    <ul class="AppBar-actions">
      <li class="AppBar-action">
        <router-link to="/">Home</router-link>
      </li>

      <li class="AppBar-action">
        <router-link to="/">Favorite</router-link>
      </li>

      <li class="AppBar-action">
        <a
          href="https://andriannus.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </li>
    </ul>
  </nav>

  <x-bottom-sheet v-model="state.isBottomSheetShown" dismissible>
    <ul class="BottomDrawer">
      <li class="BottomDrawer-action">
        <x-icon class="BottomDrawer-icon" icon="home" size="lg"></x-icon>
        Home
      </li>

      <li class="BottomDrawer-action">
        <x-icon class="BottomDrawer-icon" icon="heart" size="lg"></x-icon>
        Favorite
      </li>

      <li class="BottomDrawer-action" @click="openPersonalWeb">
        <x-icon class="BottomDrawer-icon" icon="info-circle" size="lg"></x-icon>
        About
      </li>
    </ul>
  </x-bottom-sheet>
</template>

<script lang="ts" src="./app-bar.component.ts"></script>
<style lang="scss" scoped src="./app-bar.component.scss"></style>
