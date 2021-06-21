<template>
  <teleport to="body">
    <x-fade-transition @enter="showBottomSheetDialog">
      <div
        v-if="state.isBottomSheetShown"
        class="BottomSheet"
        @click="onClickBackground"
      >
        <x-slide-up-transition @leave="hideBottomSheet">
          <div
            v-if="state.isBottomSheetDialogShown"
            :id="id"
            class="BottomSheet-dialog"
          >
            <slot></slot>
          </div>
        </x-slide-up-transition>
      </div>
    </x-fade-transition>
  </teleport>
</template>

<script lang="ts" src="./bottom-sheet.component.ts"></script>
<style lang="scss" scoped src="./bottom-sheet.component.scss"></style>
