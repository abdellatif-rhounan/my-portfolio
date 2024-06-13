<template>
  <section class="portfolio-section" id="works">
    <div class="container">
      <h2 class="heading">{{ worksContent.heading }}</h2>

      <FilterBar />

      <div v-if="filteredProjects.length > 0" class="projects">
        <ProjectBox
          v-for="project in filteredProjects"
          :key="project.name"
          :projectData="project"
        />
      </div>
      <div v-else class="no-project">Aucun Projet Trouvé</div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from "@/stores/portfolio.js";
import { storeToRefs } from "pinia";
import FilterBar from "@/components/FilterBar.vue";
import ProjectBox from "@/components/ProjectBox.vue";

const portfolio = usePortfolioStore();

const { worksContent, filteredProjects } = storeToRefs(portfolio);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.portfolio-section {
  display: flex;
}

.container {
  flex-basis: 100%;
}

.heading {
  margin-bottom: 15px;
}

.no-project {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  padding: 25px;
  font-size: 33px;
  color: $brand_color;
}

.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

// Medium Screen
@media (min-width: 768px) {
  .projects {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
}
// xLarge Screen
@media (min-width: 1200px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
}
</style>
