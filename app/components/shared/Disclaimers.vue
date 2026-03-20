<template>
  <div class="flex flex-col gap-2 text-center text-xs text-brand-gray-dark font-medium mt-6">
    <p v-if="tipo === 'morteros'">
      El rendimiento puede verse afectado por las imperfecciones de los ladrillos empleados.
    </p>
    <p>
      Esta calculadora se ofrece como una herramienta de referencia para estimar la cantidad aproximada de producto
      necesaria para su proyecto. Le recomendamos verificar el cálculo final con nuestro equipo de soporte técnico o con
      su profesional de obra antes de realizar la compra. Los resultados no consideran posibles pérdidas o variaciones
      propias del proceso de aplicación. Los valores obtenidos son orientativos y no constituyen una especificación
      técnica.
    </p>
  </div>
</template>

<script setup>
defineProps({
  tipo: {
    type: String,
    default: 'adhesivos',
  },
})
</script>
