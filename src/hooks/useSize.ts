import { computed } from 'vue'

export default (val: number) => {
  const size = computed(() => ({
    width: val + 'px',
    height: val + 'px',
    transform: 'translate(-50%, -50%)'
    // marginLeft: -val.value / 2 + 'px',
    // marginTop: -val.value / 2 + 'px'
  }))

  return { size }
}
