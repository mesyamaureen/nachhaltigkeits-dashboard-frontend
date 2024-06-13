<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import sidebarNav from '@/components/SidebarMenu.vue'
import type dashboard from '@/components/cDashboard.vue'
</script>

<template>
  <main>
    <h1>Übersicht</h1>
    <!-- <dashboard title="dashboard" /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 2rem 2rem 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 175px;
}
.content {
  padding-left: 175px;
}

.logo {
  display: flex;
  place-items: center;
  margin: 0 0 0 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: end;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: #ffffff;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: fit-content;
  }

  .logo {
    margin: 2rem 1rem 0 0;
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }

  nav {
    text-align: end;
    margin-left: -1rem;
    font-size: 1rem;
    display: flex;
    justify-content: end;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
