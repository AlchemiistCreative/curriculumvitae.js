<!-- src/components/Projects.vue -->
<template>
  <section>
    <h2>Projects</h2>
    <div class="grid">
      <a v-for="p in profile.projects" :key="p.name" :href="p.url" target="_blank" class="card">
        <h3>{{ p.name }}</h3>
        <p class="tags">
          <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
        </p>
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
import { profile } from "../data/profile";
</script>
<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; text-decoration: none; color: inherit; }
.tag { font-size: 12px; border: 1px solid #e5e7eb; padding: 2px 6px; border-radius: 6px; margin-right: 6px; }
</style>
