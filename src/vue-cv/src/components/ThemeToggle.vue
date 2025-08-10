<template>
  <label class="switch">
    <input type="checkbox" :checked="isDark" @change="toggle" />
    <span class="slider">
      <span class="icon" v-if="isDark">🌙</span>
      <span class="icon" v-else>☀️</span>
    </span>
  </label>
</template>

<script setup lang="ts">
import useColorMode from "../composables/useColorMode";
const { isDark, toggle } = useColorMode();
</script>

<style scoped>
.switch {
  position: fixed; /* fixé à l'écran */
  top: 16px;       /* marge depuis le haut */
  right: 16px;     /* marge depuis la droite */
  z-index: 999;    /* au-dessus de tout */
  
  display: inline-block;
  width: 60px;
  height: 32px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--timeline-color);
  transition: background-color 0.3s;
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 0 6px;
}

.icon {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.switch input:checked + .slider {
  background-color: var(--color-link-hover);
}

.switch input:checked + .slider .icon {
  transform: translateX(26px);
}

.switch input:not(:checked) + .slider .icon {
  transform: translateX(0);
}
</style>
