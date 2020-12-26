<template>
  <div class="flex justify-between items-center h-20 px-4">
    <slot />
    <div class="flex">
      <NjButton label="reset" variant="link" @click="$emit('clear-filter')">
        Zurücksetzen
      </NjButton>
      <button
        class="focus:outline-none block cursor-pointer"
        @click="$emit('close')"
      >
        <img src="/svg/close.svg" alt="close" class="h-8 w-8" />
      </button>
    </div>
  </div>
</template>
