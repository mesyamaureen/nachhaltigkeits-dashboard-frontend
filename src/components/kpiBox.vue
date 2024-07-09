<template>
  <div class="dashboard-item" :class="{ hidden: !kpi.visible }" @click="openPhaseView">
    <div class="dashboard-item__content">
      <h3 class="dashboard-item__heading">
        <slot name="heading" />
      </h3>
      <div class="dashboard-item__description">
        <slot name="content" />
      </div>
    </div>
    <button class="dashboard-item__button" @click="$emit('toggle-visibility')">X</button>
  </div>
</template>

<script lang="ts">
defineProps({
  kpi: Object
})

export default {
  methods: {
    openPhaseView() {
      this.$router.push({ name: 'Phase' })
    }
  }
}
</script>

<style scoped>
.dashboard-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 200px; /* Fix height for all cards */
  margin-top: 2rem;
  border: 2px solid grey;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 1rem;
  visibility: visible;
  transition:
    visibility 0.3s,
    opacity 0.3s;
}

.dashboard-item.hidden {
  visibility: hidden;
  opacity: 0;
}

.dashboard-item__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-right: 2rem;
  padding-top: 2rem;
}

.dashboard-item__heading {
  font-size: 1.5rem; /* Increase font size */
  font-weight: bold; /* Bold text */
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.dashboard-item__description {
  font-size: large;
  font-weight: 300;
  color: var(--color-text);
}

.dashboard-item__button {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--color-background);
  color: var(--color-text);
  border: 0;
  padding: 0.5rem;
  border-radius: 2px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .dashboard-item {
    margin-top: 0;
    padding: 0.4rem 0 1rem 2rem;
  }

  .dashboard-item__icon {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: #ffffff;
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}
</style>
