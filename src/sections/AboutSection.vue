<template>
  <section class="portfolio-section" id="about">
    <div class="container">
      <h2 class="heading">
        {{ aboutContent.heading[0] }}
        <span>{{ aboutContent.heading[1] }}</span>
      </h2>

      <div class="content">
        <div class="img-wrapper">
          <img
            src="@/assets/img/about-profile.png"
            :alt="aboutContent.aboutPhotoAlt"
          />
        </div>

        <div class="text">
          <h3>{{ aboutContent.descriptionHeading }}</h3>

          <p>{{ aboutContent.p1 }}</p>
          <p>{{ aboutContent.p2 }}</p>
          <p>{{ aboutContent.p3 }}</p>

          <AnchorComp
            class="btn-c btn-brand"
            icon="bx bxs-download"
            target="_blank"
            :href="globalData.cvUrl"
          >
            {{ globalData.cvBtnText }}
          </AnchorComp>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnchorComp from "@/components/AnchorComp.vue";
import { usePortfolioStore } from "@/stores/portfolio";
import { storeToRefs } from "pinia";

const portfolio = usePortfolioStore();

const { aboutContent, globalData } = storeToRefs(portfolio);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.portfolio-section {
  background-color: $second_bg_color;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 426px;
  height: 414px;
  margin: 0 auto;
  background-color: $brand_color;
  mask-image: url("@/assets/img/about-mask.png");
  mask-repeat: no-repeat;
  mask-size: 100% 424px;
  mask-position: 11% 145%;
  img {
    width: 300px;
  }
}

.text {
  h3 {
    margin-bottom: 14px;
    font-family: $hand_font;
    font-size: 22px;
    color: $brand_color;
  }

  p {
    margin-bottom: 12px;
    text-align: justify;
    letter-spacing: 0.5px;
    font-family: $hand_font;

    &:last-of-type {
      margin-bottom: 25px;
    }
  }
}

// Small Screen
@media (min-width: 576px) {
  .text {
    h3 {
      font-size: 25px;
    }

    p {
      font-size: 17px;
    }
  }
}

// Large Screen
@media (min-width: 992px) {
  .portfolio-section {
    display: flex;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 30px;
  }

  .img-wrapper {
    position: absolute;
    right: calc(50% + 30px);
    mask-position: 48% 110%;
  }

  .text {
    flex-basis: 50%;
  }
}

// xLarge Screen
@media (min-width: 1200px) {
  .img-wrapper {
    right: calc(57% + 30px);
  }

  .text {
    flex-basis: 57%;
  }
}

// xxLarge Screen
@media (min-width: 1400px) {
  .img-wrapper {
    right: calc(63% + 30px);
  }

  .text {
    flex-basis: 63%;
  }
}
</style>
