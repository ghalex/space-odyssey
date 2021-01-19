<template>
  <div class="map" :style="{ width, height }" ref="el">
    <div class="map-container" :style="{ transform }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { zoom } from 'd3-zoom'
import { select } from 'd3-selection'

export default {
  name: 'Map',
  props: {
    width: {
      type: String,
      default: '800px'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  setup() {
    const el = ref(null)
    const transform = ref('')

    onMounted(() => {
      select(el.value).call(
        zoom()
          .scaleExtent([0.5, 2])
          .on('zoom', (e) => {
            const { x, y, k } = e.transform
            transform.value = `translate(${x}px, ${y}px) scale(${k})`
            console.log(transform.value)
          }) as any
      )
    })

    return { el, transform }
  }
}
</script>

<style lang="scss" scoped>
.map {
  border: 1px solid red;
  position: relative;
  overflow: hidden;
}

.map-container {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
