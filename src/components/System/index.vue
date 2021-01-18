<template>
  <div class="system">
    <div class="system-shapes">
      <Planet :orbit="120" :radius="8" :speed="8" color="red" hasSattelite />
      <Planet :orbit="220" :radius="16" :speed="14" :offset="{ x: -20, y: 0 }" />
      <Sun />
    </div>
    <div class="system-info">
      <h1>Vespar</h1>
      <h2>system</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Sun from '../Sun/index.vue'
import Planet from '../Planet/index.vue'

export default defineComponent({
  name: 'System',
  props: {},
  components: { Sun, Planet },
  setup(p) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_vars' as vars;

.system {
  position: absolute;
  left: 200px;
  top: 200px;

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
