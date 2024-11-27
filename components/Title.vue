<template>
  <div>
    <h1
      class="text-[#FF9B15] text-4xl mt-4 xl:mt-0 xl:text-6xl max-w-[36rem] text-center"
    >
      {{ text }}
    </h1>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);
</script>
