<template>
  <div class="flex flex-col items-center gap-4 lg:gap-6">

    <FormNumberInput id="area-morteros" v-model="inputs.area_m2" label="Superficie a levantar (m²)" suffix="m²"
      placeholder="Superficie" :step="0.5" class="w-full" />

    <div class="w-full flex flex-col gap-1">
      <FormLabel>Tipo de ladrillo</FormLabel>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
        <label v-for="ladrillo in tiposLadrillo" :key="ladrillo.value"
          class="h-[4.5rem] flex flex-col justify-center items-center text-center border-2 border-brand-gray-mid rounded-lg cursor-pointer transition-all duration-150 py-2 px-3"
          :class="[
            inputs.tipo_ladrillo === ladrillo.value
              ? 'border-brand-red bg-brand-red text-white'
              : 'border-brand-gray-mid',
          ]">
          <input v-model="inputs.tipo_ladrillo" type="radio" :value="ladrillo.value" class="sr-only" />
          <span class="text-xs lg:text-base" :class="inputs.tipo_ladrillo === ladrillo.value ? 'text-white' : ''">
            {{ ladrillo.label }}
          </span>
          <span class="text-xs lg:text-sm lg:mt-1"
            :class="inputs.tipo_ladrillo === ladrillo.value ? 'text-white/90' : 'text-brand-gray-dark'">
            {{ ladrillo.subtitulo }}
          </span>
        </label>
      </div>
    </div>

    <div class="w-full flex justify-center mt-2 lg:mt-6">
      <button :disabled="!isValid"
        class="w-full max-w-[25rem] h-12 flex justify-center items-center rounded-lg lg:text-2xl uppercase text-white font-semibold"
        :class="isValid
          ? 'bg-brand-red'
          : 'bg-brand-red/60 cursor-not-allowed'" @click="calcular">
        Calcular
      </button>
    </div>

  </div>
</template>

<script setup>
import { useMorteros } from '~/composables/useMorteros'

const emit = defineEmits(['calculated'])

const { inputs, result, isValid } = useMorteros()

const tiposLadrillo = [
  { value: 'hueco_no_portante', label: 'Hueco no portante', subtitulo: 'Ladrillo hueco común' },
  { value: 'bloques_hcca', label: 'Bloques HCCA', subtitulo: 'Hormigón celular curado en autoclave' },
  { value: 'macizo', label: 'Ladrillo macizo', subtitulo: 'No compatible con Rapibrick' },
  { value: 'hormigon_19x19x39', label: 'De hormigón', subtitulo: '19 × 19 × 39 cm' },
  { value: 'ceramico_portante_12x19x33', label: 'Cerámico portante 12cm', subtitulo: '12 × 19 × 33 cm' },
  { value: 'ceramico_portante_18x19x33', label: 'Cerámico portante 18cm', subtitulo: '18 × 19 × 33 cm' },
]

function calcular() {
  if (!isValid.value) return
  emit('calculated', result.value)
}
</script>