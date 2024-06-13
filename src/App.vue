<template>
  <PageHeader />
  <HomeSection />
  <AboutSection />
  <WorksSection />
  <ContactSection />
  <PageFooter />
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import HomeSection from "@/sections/HomeSection.vue";
import AboutSection from "@/sections/AboutSection.vue";
import WorksSection from "@/sections/WorksSection.vue";
import ContactSection from "@/sections/ContactSection.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>
