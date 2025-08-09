<!-- src/components/Contact.vue -->
<template>
  <section>
    <h2>Contact</h2>
    <p>Disponible pour missions SRE/Administration système. Écrivez-moi :</p>
    <a :href="profile.links.email" class="btn">Me contacter</a>
  </section>
</template>
<script setup lang="ts">
import { profile } from "../data/profile";
</script>
<style scoped>
.btn { display:inline-block; padding:10px 14px; border-radius:10px; border:1px solid #e5e7eb; text-decoration:none; }
</style>
