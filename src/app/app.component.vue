<template>
  <a href="#MainContent" class="SkipLink">Menuju ke konten</a>

  <header>
    <x-app-bar></x-app-bar>
  </header>

  <main class="Main">
    <router-view></router-view>
  </main>

  <x-footer></x-footer>
</template>

<script lang="ts" src="./app.component.ts"></script>
<style lang="scss" src="./app.component.scss"></style>
