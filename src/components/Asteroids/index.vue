<template>
  <div
    class="asteroids-container"
    :style="{
      top: offset.y + 'px',
      left: offset.x + 'px',
      width: size + 'px',
      height: size + 'px'
    }"
  >
    <div
      class="asteroids-belt"
      :style="{
        width: size + 'px',
        height: size + 'px'
      }"
    >
      <div :style="{ width: size * 0.8 + 'px', height: size * 0.8 + 'px', ...asteroids }" />
    </div>
  </div>
</template>

<script lang="ts">
import { useStars } from '@/hooks'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Asteroids',
  props: {
    radius: {
      type: Number,
      default: 50
    },
    offset: {
      type: Object,
      default: () => {
        return { x: 0, y: 0 }
      }
    },
    stars: {
      type: Number,
      default: 200
    }
  },
  setup(p) {
    const size = computed(() => p.radius * 2)
    const asteroids = useStars(p.stars, size.value, -size.value / 2, -size.value * 0.393)

    return { asteroids, size }
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins' as m;
@use '@/assets/scss/_functions' as f;

.asteroids-container {
  position: absolute;
  transform: translate(-50%, -50%);
}

.asteroids-belt {
  position: absolute;
  overflow: hidden;

  @include m.round;
  @include m.orbit {
    animation-duration: 60s;
  }

  & > div {
    position: absolute;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 999px;
  }
}
</style>
