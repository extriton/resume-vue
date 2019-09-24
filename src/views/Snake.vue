<template>
  <div class="game-snake-wrapper">
      <GameSnake />
  </div>
</template>

<script>
import GameSnake from '@/components/GameSnake.vue'

export default {
    name: 'Snake',
    components: {
        GameSnake
    }
}
</script>

<style lang="scss">
.game-snake-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: #777;
}
</style>
