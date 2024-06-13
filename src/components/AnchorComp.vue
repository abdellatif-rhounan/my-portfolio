<template>
  <a>
    <slot />
    <i v-if="icon" :class="icon"></i>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  icon: {
    type: String,
    required: false,
  },
});
</script>
