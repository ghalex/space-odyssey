function random(max: number, min = 0) {
  return Math.floor(Math.random() * max + min)
}

export default (stars: number, maxArea = 100, minArea = 0, starSize = 0) => {
  let result = `${minArea + random(maxArea)}px ${
    minArea + random(maxArea)
  }px 0 ${starSize}px rgba(255, 255, 255, ${Math.random().toFixed(3)})`

  for (let i = 0; i < stars; i++) {
    const x = `${minArea + random(maxArea)}px`
    const y = `${minArea + random(maxArea)}px`

    result = `${result}, ${x} ${y} 0 ${starSize}px rgba(255, 255, 255, ${Math.random().toFixed(3)})`
  }

  return {
    boxShadow: result
  }
}
