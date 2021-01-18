<template>
  <div
    class="asteroids-container"
    :style="{
      top: offset.y + 'px',
      left: offset.x + 'px',
      width: radius * 2 + 'px',
      height: radius * 2 + 'px'
    }"
  >
    <div class="asteroids-orbit">
      <div
        class="asteroids"
        :style="{
          width: radius * 2 + 'px',
          height: radius * 2 + 'px',
          ...starsCSS
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStars } from '@/hooks'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Asteroids',
  props: {
    radius: {
      type: Number,
      default: 140
    },
    offset: {
      type: Object,
      default: () => {
        return { x: 0, y: 0 }
      }
    },
    stars: {
      type: Number,
      default: 600
    }
  },
  setup(p) {
    const starsCSS = useStars(p.stars, p.radius * 2, -p.radius / 2, -p.radius * 0.393)
    return { starsCSS }
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins' as m;

.asteroids-container {
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;

  @include m.round;
}

.asteroids-orbit {
  width: 100%;
  height: 100%;
  @include m.round;
}

.asteroids {
  left: 50%;
  top: 50%;
  position: absolute;
  background: transparent;

  @include m.round;
}
</style>
