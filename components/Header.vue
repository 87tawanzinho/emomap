<template>
  <div class="flex justify-between px-24 py-4 border-b w-full">
    <div class="flex items-center">
      <p class="font-mono text-xl">
        Emo/<span class="text-[#55a6f8]">Map</span>
      </p>

      <Icon name="mi:add" />
    </div>

    <div class="flex gap-8">
      <ElLink class="border rounded-2xl bg-gray-100 x tr"
        >Sobre a EmoMap</ElLink
      >
      <ElLink>Preços</ElLink>
    </div>

    <div class="flex gap-2">
      <ElButton type="info" plain>Join Us</ElButton>
      <ElButton type="primary">Login</ElButton>
    </div>
  </div>
</template>

<style>
.x {
  padding: 0px 8px;
}

.tr {
  transition: 0.1ms ease-in-out;
}

.tr:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: 0.1ms ease-in-out;
}
</style>
