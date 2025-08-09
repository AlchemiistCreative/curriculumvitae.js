<!-- src/components/Skills.vue -->
<template>
  <section>
    <h2>Skills</h2>
    <div class="chips">
      <span v-for="s in profile.skills" :key="s" class="chip">{{ s }}</span>
    </div>
  </section>
</template>
<script setup lang="ts">
import { profile } from "../data/profile";
</script>
<style scoped>
.chips { display: flex; flex-wrap: wrap; gap: 10px; }
.chip { padding: 6px 10px; border: 1px solid #e5e7eb; border-radius: 999px; font-size: 14px; }
</style>
