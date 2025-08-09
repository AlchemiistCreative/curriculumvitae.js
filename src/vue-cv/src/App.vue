<!-- src/App.vue -->
<template>
  <main class="container">
    <Hero />
    <ExperienceTimeline />
    <Skills />
    <Projects />
    <Contact />
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
</script>

<style scoped>
.container { max-width: 980px; margin: 0 auto; padding: 24px; }
footer { opacity: .6; margin-top: 40px; font-size: 14px; }
</style>
