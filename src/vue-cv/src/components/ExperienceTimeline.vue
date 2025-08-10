<!-- src/components/ExperienceTimeline.vue -->
<template>
  <section ref="sectionEl">
    <h2>Experience</h2>

    <ul class="timeline">
      <li v-for="(job, i) in profile.experience" :key="i" class="timeline-item">
        <!-- Colonne gauche: rail + marker + période -->
        <div class="rail">
          <span class="marker" aria-hidden="true"></span>
          <span class="period">{{ job.period }}</span>
        </div>

        <!-- Colonne droite: contenu -->
        <div class="content">
          <div class="header">
            <strong>{{ job.role }}</strong> — {{ job.company }}
          </div>

          <p v-if="job.description" class="desc">{{ job.description }}</p>

          <ul class="bullets">
            <li v-for="(b, j) in job.bullets" :key="j">{{ b }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/profile";
gsap.registerPlugin(ScrollTrigger);

const sectionEl = ref<HTMLElement | null>(null);

onMounted(() => {
  const items = sectionEl.value?.querySelectorAll<HTMLElement>(".timeline-item");
  if (!items) return;

  items.forEach((el) => {
    gsap.from(el.querySelector(".content"), {
      opacity: 0, y: 14, duration: 0.35, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
    gsap.from(el.querySelector(".marker"), {
      scale: 0.7, autoAlpha: 0, duration: 0.25, ease: "back.out(2)",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
});
</script>


<style scoped>
.timeline {
  --rail-width: 120px;     /* largeur colonne gauche */
  --line-width: 2px;       /* épaisseur de la barre */
  --line-color: var(--timeline-color); /* utilise la variable globale */
  --gap: 18px;             /* espace entre rail et contenu */
  --dot-size: 12px;        /* taille du marqueur */
}

h2 {
  margin-top: 32px;
  text-align: center;
}

.timeline {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
}
.timeline::before {
  content: "";
  position: absolute;
  left: calc(var(--rail-width) / 2 - var(--line-width) / 2);
  top: 1%;
  bottom: 0;
  width: var(--line-width);
  background: var(--line-color);
}

.timeline-item {
  display: grid;
  grid-template-columns: var(--rail-width) 1fr;
  column-gap: var(--gap);
  align-items: start;
  margin: 28px 0;
}

.rail {
  position: relative;
  min-height: var(--dot-size);
}

.marker {
  position: absolute;
  left: calc(50% - var(--dot-size)/2);
  top: 0.55em;
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.05);
}

.period {
  display: block;
  /*margin-top: calc(var(--dot-size) + 8px);*/
  font-size: 0.9rem;
  opacity: 0.75;
  margin-right: 100px;
  text-align: center;
}

.header {
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.desc {
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 6px auto 20px;
  padding: 10px 12px;
  max-width: 80ch;
  text-align: center;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line-color);
  border-radius: 8px;
}

.desc + .bullets {
  margin-top: 12px;
}

.bullets {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 80ch;
  text-align: left;
}
.bullets > li {
  position: relative;
  margin: 6px 0;
  padding-left: 16px;
}
.bullets > li::before {
  content: "";
  position: absolute;
  left: 0;
  top: .62em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.timeline-item + .timeline-item {
  padding-top: 18px;
  border-top: 1px dashed var(--line-color);
}

@media (max-width: 700px) {
  .timeline { --rail-width: 88px; --gap: 14px; }
  .period { font-size: .85rem; }
}

</style>
