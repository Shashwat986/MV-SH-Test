<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Create
        </a>
        <a class="navbar-item">
          Browse
        </a>
      </div>
    </div>
  </nav>
  <div class="pb-5"></div>

  <RouterView />
</template>
