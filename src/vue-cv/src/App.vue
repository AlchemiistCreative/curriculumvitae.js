<!-- src/App.vue -->
<template>
  <main class="container">
    <Hero />
    <ExperienceTimeline />
    <Skills />
    <Projects />
    <Contact />
    <ThemeToggle />
    <br>
    <footer>© {{ new Date().getFullYear() }} {{ profile.name }}</footer>
  </main>
</template>

<script setup lang="ts">
import { profile } from "./data/profile";
import Hero from "./components/Hero.vue";
import ExperienceTimeline from "./components/ExperienceTimeline.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import ThemeToggle from "./components/ThemeToggle.vue";

</script>

<style scoped>
.container { max-width: 980px; margin: 0 auto; padding: 24px; position: relative; }
.container :deep(.toggle){
  position: fixed; /* ou absolute si tu préfères dans le container */
  top: 16px; right: 16px; z-index: 50;
}
</style>