<script setup lang="ts">
import Title from "~/components/Title.vue";
</script>

<template>
  <div class="h-screen flex flex-col items-center">
    <Header />
    <div class="flex mt-24">
      <HomePage />
    </div>
  </div>
</template>

<style>
.change-style {
  /* background: #dfe7d2; */
  width: 200px;
  border-radius: 18px;
}
</style>
