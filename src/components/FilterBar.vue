<template>
  <div class="filter-bar">
    <div v-for="filter in portfolio.filters" class="item" :key="filter">
      <input type="radio" :id="filter" v-model="pick" :value="filter" />

      <label :for="filter" class="label" :class="{ active: pick == filter }">
        {{ filter }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePortfolioStore } from "@/stores/portfolio.js";

const portfolio = usePortfolioStore();
let pick = ref(portfolio.pickedTech);

watch(pick, async (newVal) => portfolio.pickedTechMutate(newVal));
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.item input {
  display: none;
}

.label {
  padding: 5px 8px;
  border-radius: 3px;
  border: 1px solid $brand_color;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  &.active,
  &:hover {
    background-color: $brand_color;
    color: #000;
  }
}
</style>
