<template>
  <footer class="footer">
    <div class="container">
      <div class="text">
        {{ footerContent }} &copy; {{ currentYear }}
        <span>{{ globalData.firstname }} {{ globalData.lastname }}</span>
      </div>

      <div class="icon-top">
        <a href="#home">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { usePortfolioStore } from "@/stores/portfolio";
import { storeToRefs } from "pinia";

const portfolio = usePortfolioStore();

const { footerContent, globalData } = storeToRefs(portfolio);

const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: $bg_color;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 0;
}

.text {
  font-size: 15px;

  span {
    font-family: $hand_font;
    font-weight: 600;
  }
}

.icon-top {
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-50%);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 7px;
    background: $brand_color;
    text-decoration: none;
    transition: box-shadow 0.3s;

    i {
      font-size: 25px;
      font-weight: 500;
      color: $bg_color;
    }

    &:hover {
      box-shadow: 0 0 10px $brand_color;
    }
  }
}
</style>
