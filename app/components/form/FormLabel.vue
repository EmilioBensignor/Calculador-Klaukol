<template>
  <label :for="htmlFor" class="text-xs lg:text-base font-medium">
    <slot />
  </label>
</template>

<script setup>
defineProps({
  htmlFor: {
    type: String,
    default: null,
  },
})
</script>
