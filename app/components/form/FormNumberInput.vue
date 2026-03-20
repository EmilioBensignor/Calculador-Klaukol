<template>
  <div class="flex flex-col gap-1">
    <FormLabel :html-for="id">{{ label }}</FormLabel>
    <div class="relative">
      <input :id="id" :value="modelValue" type="number" :min="min" :step="step" :placeholder="placeholder"
        class="w-full border-2 rounded-lg text-xs lg:text-base outline-none placeholder:text-xs lg:placeholder:text-base placeholder:text-brand-gray-dark py-[0.875rem] px-3"
        :class="[
          modelValue != null && modelValue !== '' ? 'border-brand-red' : 'border-brand-gray-mid',
          suffix ? 'pr-10' : '',
        ]" @input="$emit('update:modelValue', Number($event.target.value))" />
      <span v-if="suffix" class="absolute right-3 top-1/2 -translate-y-1/2 text-xs lg:text-base font-medium">{{ suffix
        }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  suffix: {
    type: String,
    default: null,
  },
  min: {
    type: Number,
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
  },
  placeholder: {
    type: String,
    default: '0',
  },
})

defineEmits(['update:modelValue'])
</script>
