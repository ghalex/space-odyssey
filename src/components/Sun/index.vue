<template>
  <div class="sun"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Sun',
  props: {
    radius: {
      type: Number,
      default: 20
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  setup(p) {
    const size = computed(() => p.radius * 2 + 'px')

    return { size }
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins' as m;

.sun {
  position: absolute;
  cursor: pointer;
  border-radius: 999px;
  background-image: radial-gradient(ellipse at center, #ffd000 1%, #f9b700 39%, #f9b700 39%, #e06317 100%);
  background-clip: padding-box;
  background-position: -28px -103px;
  background-size: 175%;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 8px rgba(255, 203, 0, 0.1);

  &:hover {
    opacity: 0.7;
  }

  @include m.size(v-bind(size));
}
</style>
