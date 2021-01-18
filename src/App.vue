<template>
  <div>
    <BgStars />
    <div class="map">
      <System name="Vesper" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BgStars, System } from '@/components'

export default defineComponent({
  name: 'App',
  components: {
    BgStars,
    System
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/_vars';

.map {
  font-family: $font-sans;
  position: absolute;
  font-weight: 500;
}

.test {
  color: white;
  margin-left: 100px;
  margin-top: 100px;
}
</style>
