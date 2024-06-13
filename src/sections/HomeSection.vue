<template>
  <section class="portfolio-section" id="home">
    <div class="container">
      <div class="content">
        <span class="greeting">{{ homeContent.greeting }}</span>

        <div class="myname">
          <span>{{ globalData.firstname }}</span>
          {{ globalData.lastname }}
        </div>

        <div class="description">{{ homeContent.description }}</div>

        <div class="box-btn">
          <AnchorComp
            class="btn-c btn-brand"
            icon="bx bxs-download"
            target="_blank"
            :href="globalData.cvUrl"
          >
            {{ globalData.cvBtnText }}
          </AnchorComp>

          <AnchorComp class="btn-c btn-outline-brand" href="#works">
            {{ homeContent.worksBtnText }}
          </AnchorComp>
        </div>
      </div>

      <div class="home-img">
        <div class="img-wrapper">
          <img :src="imgHome" alt="Ma Photo Professionnelle" />
        </div>
      </div>

      <div class="social">
        <SocialLink
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.href"
          :icon="link.icon"
          :title="link.title"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AnchorComp from "@/components/AnchorComp.vue";
import SocialLink from "@/components/SocialLink.vue";
import { usePortfolioStore } from "@/stores/portfolio";
import { storeToRefs } from "pinia";

const portfolio = usePortfolioStore();

const { globalData, homeContent, socialLinks } = storeToRefs(portfolio);

const imgHome = require("@/assets/img/developer.png");
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.portfolio-section {
  display: flex;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
}

.content {
  font-weight: 600;
}

.greeting {
  font-size: 20px;
}

.myname {
  margin: 20px 0 10px;
  line-height: 1;
  font-family: $hand_font;
  font-size: 43px;
  > span {
    color: $brand_color;
  }
}

.description {
  font-size: 23px;
  margin-bottom: 20px;
}

.box-btn {
  display: inline-flex;
  column-gap: 10px;
}

.home-img {
  display: none;
}

.social {
  position: absolute;
  bottom: 0;
  display: inline-flex;
  column-gap: 10px;
}

@keyframes rotate-image {
  100% {
    transform: rotate(360deg);
  }
}

// Small Screen
@media (min-width: 576px) {
  .greeting {
    font-size: 23px;
  }

  .myname {
    font-size: 50px;
  }

  .description {
    font-size: 25px;
  }
}

// Medium Screen
@media (min-width: 768px) {
  .myname {
    font-size: 55px;
  }
}

// Large Screen
@media (min-width: 992px) {
  .container {
    justify-content: space-between;
    flex-basis: 100%;
  }

  .content {
    flex-basis: 47%;
  }

  .myname {
    font-size: 50px;
  }

  .home-img {
    position: relative;
    display: block;
    width: 410px;
    height: 410px;
    padding: 20px;
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: conic-gradient(
        $brand_color 22%,
        transparent 22% 50%,
        $brand_color 50% 72%,
        transparent 72% 100%
      );
      mask-image: radial-gradient(
        farthest-side,
        transparent calc(100% - 20px),
        #000 0
      );
      -webkit-mask-image: radial-gradient(
        farthest-side,
        transparent calc(100% - 7px),
        #000 0
      );
      z-index: -1;
      animation: rotate-image 5s linear infinite;
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 50%;
    background: $brand_color;
    overflow: hidden;

    img {
      width: 88%;
    }
  }
}

// xLarge Screen
@media (min-width: 1200px) {
  .myname {
    font-size: 60px;
  }

  .home-img {
    width: 465px;
    height: 465px;
  }
}

// xxLarge Screen
@media (min-width: 1400px) {
  .content {
    flex-basis: 40%;
  }

  .home-img {
    width: 488px;
    height: 488px;
  }
}
</style>
