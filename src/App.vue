<template>
  <div>
    <BgStars />
    <Map width="600px">
      <System
        :position="{ x: 100, y: 100 }"
        :planets="[
          { orbit: 120, hasSattelite: false, radius: 6, speed: 3 },
          { orbit: 200, hasSattelite: true, color: 'red', offset: { x: -10 } },
          { orbit: 300, radius: 18, color: 'green', offset: { x: 0 }, speed: 11 }
        ]"
        :asteroids="{ radius: 150 }"
      />
      <System
        :position="{ x: 420, y: 400 }"
        :planets="[
          { orbit: 120, hasSattelite: false, radius: 6, speed: 3 },
          { orbit: 200, hasSattelite: true, color: '#F58866', offset: { x: 10 } }
        ]"
        :asteroids="{ radius: 100 }"
      />
    </Map>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BgStars, System, Map } from '@/components'

export default defineComponent({
  name: 'App',
  components: {
    BgStars,
    System,
    Map
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
