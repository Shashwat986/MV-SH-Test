<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Create
        </router-link>
        <router-link class="navbar-item" to="/browse">
          Browse
        </router-link>
      </div>
    </div>
  </nav>
  <div class="pb-5"></div>

  <RouterView />
</template>
