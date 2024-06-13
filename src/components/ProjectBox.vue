<template>
  <div class="project-box">
    <img
      class="img"
      :src="imgSrc"
      :alt="'Photo de projet ' + projectData.name"
    />

    <div class="layer">
      <div class="details">
        <h3 class="title" v-text="projectData.name"></h3>
        <div class="tag">
          <span
            v-for="(technologie, i) in projectData.technologies"
            :key="i"
            v-text="technologie"
          ></span>
        </div>
        <p class="description" v-text="shortDescription"></p>
      </div>

      <SocialLink
        :href="projectData.link"
        title="Voir en Ligne"
        icon="bx bx-link-external"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import SocialLink from "@/components/SocialLink.vue";

const props = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
});

const shortDescription = computed(() => {
  const maxChars = 100;
  const desc = props.projectData.description;

  return desc.length > maxChars ? `${desc.substring(0, maxChars)}....` : desc;
});

const imgSrc = require(`@/assets/img/works_imgs/${props.projectData.img_src}`);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.project-box {
  position: relative;
  height: 300px;
  border-radius: 13px;
  letter-spacing: 1px;
  overflow: hidden;
  box-shadow: 0 0 10px #000;

  &:hover .layer {
    transform: translateY(0);
  }
}

.img {
  width: 100%;
  height: 100%;
}

.layer {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(150, 141, 123, 88%);
  transform: translateY(100%);
  transition: transform 0.3s;
}

.details {
  text-align: center;
}

.title {
  color: $brand_color;
  font-size: 20px;
}

.tag {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span {
    padding: 1px 5px;
    border-radius: 3px;
    background: rgb(57 31 31 / 45%);
    font-size: 12px;
    color: lightgray;
  }
}

.description {
  margin: 12px 0 10px;
  padding: 14px 10px;
  border-radius: 7px;
  background: rgb(0 0 0 / 32%);
  text-align: justify;
  font-size: 14px;
}

// Small Screen
@media (min-width: 576px) {
  .title {
    font-size: 22px;
  }
}

// Medium Screen
@media (min-width: 768px) {
  .title {
    font-size: 19px;
  }
}

// xLarge Screen
@media (min-width: 1200px) {
  .title {
    font-size: 20px;
  }

  .description {
    line-height: 1.4;
    font-size: 15px;
  }
}
</style>
