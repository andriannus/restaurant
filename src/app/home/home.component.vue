<template>
  <x-hero></x-hero>

  <div class="Container">
    <h2 class="Headline-2 TextAlign-center">Explore Restaurant</h2>

    <div class="Grids">
      <x-card
        v-for="(restaurant, index) of RESTAURANTS"
        :key="index"
        class="Grid"
      >
        <template #media>
          <img
            :src="restaurant.pictureId"
            :alt="restaurant.name"
            loading="lazy"
          />
        </template>

        <template #text>
          <h3 class="Headline-3">{{ restaurant.name }}</h3>
          <p class="BodyText-2">Rating: {{ restaurant.rating }}</p>
          <p class="BodyText-1">$ • {{ restaurant.city }}</p>
          <p class="BodyText-2 Truncate">{{ restaurant.description }}</p>
        </template>
      </x-card>
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
<style lang="scss" scoped src="./home.component.scss"></style>
