<template>
  <button>
    <slot />
    <i v-if="icon" :class="icon"></i>
  </button>
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
