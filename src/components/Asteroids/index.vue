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
    <div
      class="asteroids-belt"
      :style="{
        width: radius * 2 + 'px',
        height: radius * 2 + 'px'
      }"
    />
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
        return { x: 20, y: 0 }
      }
    },
    stars: {
      type: Number,
      default: 100
    }
  },
  setup(p) {
    const starsCSS = useStars(p.stars, p.radius * 2, -p.radius / 2, -p.radius * 0.7)
    return { starsCSS }
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
  opacity: 0.5;

  &::after,
  &::before {
    background: currentColor;
    border-radius: 50%;
    box-shadow: f.asteroids(15, 290px, 30px);
    color: #ccc;
    content: '';
    display: block;
    left: 50%;
    height: 0.1rem;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 0.1rem;
  }

  &::after {
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  }

  @include m.round;
  @include m.orbit {
    animation-duration: 120s;
  }
}
</style>
