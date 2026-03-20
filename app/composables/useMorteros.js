import { reactive, computed } from 'vue'
import { PRODUCTOS } from '~/constants/productos'

const MORTEROS_TABLE = {
  hueco_no_portante: {
    producto: PRODUCTOS.RAPIBRICK,
    min: 2.5,
    max: 3,
    avg: 2.75,
    comentario: 'El rendimiento puede verse afectado por las imperfecciones de los ladrillos empleados',
  },
  bloques_hcca: {
    producto: PRODUCTOS.RAPIBRICK,
    min: 2.5,
    max: 3,
    avg: 2.75,
    comentario: null,
  },
  macizo: null,
  hormigon_19x19x39: {
    producto: PRODUCTOS.RAPIBRICK_ESTRUCTURAL,
    min: 3,
    max: 3.5,
    avg: 3.25,
    comentario: null,
  },
  ceramico_portante_12x19x33: {
    producto: PRODUCTOS.RAPIBRICK_ESTRUCTURAL,
    min: 6,
    max: 6.5,
    avg: 6.25,
    comentario: null,
  },
  ceramico_portante_18x19x33: {
    producto: PRODUCTOS.RAPIBRICK_ESTRUCTURAL,
    min: 8,
    max: 8.5,
    avg: 8.25,
    comentario: null,
  },
}

export function useMorteros() {
  const inputs = reactive({
    area_m2: null,
    tipo_ladrillo: null,
  })

  const isValid = computed(() =>
    (inputs.area_m2 ?? 0) > 0 && inputs.tipo_ladrillo !== null
  )

  const result = computed(() => {
    if (!isValid.value) return null

    const config = MORTEROS_TABLE[inputs.tipo_ladrillo]

    if (config === null) {
      return {
        incompatible: true,
        mensaje: 'No tenemos producto disponible',
      }
    }

    const consumo_total_min = inputs.area_m2 * config.min
    const consumo_total_max = inputs.area_m2 * config.max
    const consumo_total_kg = inputs.area_m2 * config.avg
    return {
      incompatible: false,
      producto: config.producto,
      consumo_min: config.min,
      consumo_max: config.max,
      consumo_promedio: config.avg,
      consumo_total_kg,
      consumo_total_min,
      consumo_total_max,
      bolsas_25kg: Math.ceil(consumo_total_kg / 25),
      bolsas_min: Math.ceil(consumo_total_min / 25),
      bolsas_max: Math.ceil(consumo_total_max / 25),
      comentario: config.comentario,
    }
  })

  function reset() {
    inputs.area_m2 = null
    inputs.tipo_ladrillo = null
  }

  return { inputs, result, isValid, reset }
}
