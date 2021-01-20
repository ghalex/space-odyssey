<template>
  <div>
    <Map
      :width="600"
      :height="600"
      :systems="[
        {
          position: { x: 100, y: 100 },
          planets: [
            { orbit: 120, hasSattelite: false, radius: 6, speed: 3 },
            { orbit: 200, hasSattelite: true, color: 'red', offset: { x: -10 } },
            { orbit: 280, radius: 18, color: 'green', offset: { x: 0 }, speed: 11 }
          ],
          asteroids: { radius: 150 }
        },
        {
          position: { x: 420, y: 400 },
          planets: [
            { orbit: 120, hasSattelite: false, radius: 6, speed: 3 },
            { orbit: 250, hasSattelite: true, color: '#F58866', offset: { x: 0 } }
          ],
          asteroids: { radius: 100 }
        }
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Map } from '@/components'

export default defineComponent({
  name: 'App',
  components: {
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
