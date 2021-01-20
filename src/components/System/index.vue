<template>
  <div class="system" :style="{ left: position.x + 'px', top: position.y + 'px' }">
    <div class="system-shapes">
      <Asteroids v-if="asteroids" :radius="asteroids.radius" />
      <Planet
        v-for="(p, i) in planets"
        :key="i"
        :orbit="p.orbit"
        :radius="p.radius"
        :speed="p.speed"
        :color="p.color"
        :offset="p.offset"
        :hasSattelite="p.hasSattelite"
      />
      <Sun />
    </div>
    <div class="system-info">
      <h1>{{ name }}</h1>
      <h2>system</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sun from '../Sun/index.vue'
import Planet from '../Planet/index.vue'
import Asteroids from '../Asteroids/index.vue'

export default defineComponent({
  name: 'System',
  props: {
    name: {
      type: String,
      default: () => 'SYS-' + (Math.floor(Math.random() * 100) + 1)
    },
    planets: {
      type: Array,
      default: () => []
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    },
    asteroids: {
      type: Object,
      default: null
    }
  },
  components: { Sun, Planet, Asteroids },
  setup(p) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_vars' as vars;

.system {
  position: absolute;

  .system-shapes {
    position: absolute;
  }

  .system-info {
    position: absolute;
    transform: translateX(-50%);
    top: 20px;
    font-family: vars.$font-mono;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-top: 0.5rem;
    user-select: none;
    white-space: nowrap;

    h1 {
      color: vars.$primary-color;
      font-size: 16px;
      line-height: 1rem;
      margin: 0;
    }

    h2 {
      font-size: 10px;
      margin: 0;
    }
  }
}
</style>
