<template>
  <div class="map" :style="{ width: width + 'px', height: height + 'px' }" ref="el">
    <Background class="full" />
    <div class="map-area" :style="{ transform }">
      <div class="systems">
        <System v-for="(s, i) in systems" :key="i" v-bind="s" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { zoom } from 'd3-zoom'
import { select } from 'd3-selection'

import System from '../System/index.vue'
import Background from '../BgStars/index.vue'

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
    },
    systems: {
      type: Array,
      default: () => []
    }
  },
  components: { System, Background },
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
          }) as any
      )
    })

    return { el, transform }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins' as m;

.map {
  position: relative;
  overflow: hidden;
}

.map-area {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
