<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Portfolio.</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-lg-auto mb-2 my-lg-0" id="navbarNav">
          <li
            v-for="link in portfolio.navbarLinks"
            :key="link.href"
            class="nav-item"
          >
            <a class="nav-link" :href="link.href">{{ link.fr }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { usePortfolioStore } from "@/stores/portfolio";

const portfolio = usePortfolioStore();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.navbar {
  background-color: $bg_color;
}

.navbar-brand {
  line-height: 1;
  font-size: 22px;
  font-weight: 600;
  color: $brand_color;
  transition: color 0.3s;

  &:hover {
    color: $text_color;
  }
}

.navbar-toggler {
  padding-left: 7px;
  padding-right: 7px;

  .navbar-toggler-icon {
    height: 1.35em;
  }
}

.navbar-nav {
  margin-top: 7px;

  .nav-link {
    font-weight: 500;
    transition: color 0.3s;

    &.active,
    &:hover {
      color: $brand_color;
    }
  }
}

// Large Screen
@media (min-width: 992px) {
  .navbar-nav {
    column-gap: 30px;

    .nav-link {
      padding: {
        left: 0;
        bottom: 5px;
        right: 0;
      }
      border-bottom: 3px solid transparent;
      font-weight: 600;

      &.active {
        border-bottom-color: $brand_color;
      }
    }
  }
}
</style>
