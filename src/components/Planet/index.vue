<template>
  <div
    class="planet-container"
    :style="{
      top: offset.y + 'px',
      left: offset.x + 'px',
      width: orbit + 'px',
      height: orbit + 'px'
    }"
  >
    <div class="planet-orbit">
      <div class="planet"></div>
      <div
        class="sattelite-container"
        v-if="hasSattelite"
        :style="{
          width: radius * 4 + 'px',
          height: radius * 4 + 'px'
        }"
      >
        <div class="sattelite-orbit">
          <div class="sattelite" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Planet',
  props: {
    radius: {
      type: Number,
      default: 8
    },
    orbit: {
      type: Number,
      default: 100
    },
    speed: {
      type: Number,
      default: 4
    },
    color: {
      type: String,
      default: 'blue'
    },
    offset: {
      type: Object,
      default: () => {
        return { x: 0, y: 0 }
      }
    },
    hasSattelite: {
      type: Boolean,
      default: false
    }
  },
  setup(p) {
    const sizePlanet = computed(() => p.radius * 2 + 'px')
    const sizeSattelite = computed(() => p.radius / 2 + 'px')

    const speedPlanet = computed(() => p.speed + 's')
    const speedSattelite = computed(() => p.speed / 6 + 's')

    return { sizePlanet, sizeSattelite, speedPlanet, speedSattelite }
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins' as m;

.planet-container {
  position: absolute;
  transform: translate(-50%, -50%);
}

.planet-orbit {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  z-index: 2;

  @include m.round;
  @include m.orbit {
    animation-duration: v-bind(speedPlanet);
  }
}

.planet {
  left: 50%;
  content: '';
  position: absolute;
  box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
  background-color: v-bind(color);

  @include m.round;
  @include m.size(v-bind(sizePlanet));
}

.sattelite-container {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sattelite-orbit {
  width: 100%;
  height: 100%;

  @include m.round;
  @include m.orbit {
    animation-duration: v-bind(speedSattelite);
  }
}

.sattelite {
  left: 50%;
  content: '';
  position: absolute;
  background-color: #ccc;

  @include m.round;
  @include m.size(v-bind(sizeSattelite));
}
</style>
