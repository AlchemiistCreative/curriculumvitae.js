<!-- src/components/Hero.vue -->
<template>
  <section ref="hero" class="hero">
    <img class="avatar" :src="avatar" alt="portrait" />
    <div class="txt">
      <h1>{{ profile.name }}</h1>
      <p class="title">{{ profile.title }}</p>
      <p class="summary">{{ profile.summary }}</p>
      <p class="summary">{{ profile.location }}</p>
      <nav class="links">
        <a :href="profile.links.email">Email</a>
        <a :href="profile.links.github" target="_blank">GitHub</a>
        <a :href="profile.links.linkedin" target="_blank">LinkedIn</a>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { profile } from "../data/profile";
// importe l'image (plus fiable que /src/... en prod)
import avatar from "../assets/1713886619006.jpeg";

const hero = ref<HTMLElement|null>(null);

onMounted(() => {
  if (!hero.value) return;
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(hero.value.querySelector(".avatar"), { opacity: 0, scale: 0.9, duration: 0.5 })
    .from(
      [".txt h1", ".txt .title", ".txt .summary"],
      { opacity: 0, y: 12, duration: 0.4, stagger: 0.08 },
      "-=0.15"
    )
    .from(".links a", { opacity: 0, y: 8, duration: 0.25, stagger: 0.05 }, "-=0.2");
});
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: left;
  margin: 40px auto 0;
  max-width: 980px;
  padding: 0 16px;
}
.avatar {
  width: 140px; height: 140px; border-radius: 50%;
  object-fit: cover; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  will-change: transform, opacity;
}
.txt { max-width: 700px; }
.title { font-weight: 600; opacity: .8; }
.summary { margin: 10px 0 14px; line-height: 1.5; }
.links a { margin-right: 12px; }

@media (max-width: 640px) {
  .hero { flex-direction: column; text-align: center; gap: 16px; }
  .txt { max-width: 100%; }
  .avatar { margin: 0 auto; }
}
</style>
