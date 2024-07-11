<template>
  <div :class="['dashboard-item', co2Class]" @click="openPhaseView">
    <div :class="{ hidden: !kpi.visible }">
    <div class="dashboard-item__content">
      <h3 class="dashboard-item__heading">
        <slot name="heading" />
      </h3>
      <div class="dashboard-item__description">
        <slot name="content" />
      </div>
    </div>
    <button class="dashboard-item__button" @click.stop="$emit('remove-kpi', kpi.id)">X</button>
  </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  props: {
          kpi: {
            type: Object,
            required: true
          }
        },
  methods: {
    openPhaseView() {
      this.$router.push({ name: 'Phase' })
    }
  },
  setup(props) {
    const co2Class = computed(() => {
      console.log('aaaaCO2:', props.kpi.co2);
      
      if (props.kpi.co2 > 0 && props.kpi.co2 < 300) {
        return 'green';
      } else if (props.kpi.co2 >= 300 && props.kpi.co2 < 500) {
        return 'yellow';
      } else if (props.kpi.co2 <= 0) {
        return 'grey';
      } else {
        return 'red';
      }
    });

    return {
      co2Class,
    };
  },
}

</script>

<style scoped>
.dashboard-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px; /* Fix height for all cards */
  margin-top: 2rem;
  border: 0.5px solid;
  border-radius: 10px;
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
.green {
  background-color: #BFE3A9;
  border-color: #BFE3A9;
  /* color: white; */
}

.yellow {
  background-color: #FFD378;
  border-color: #FFD378;
  /* color: black; */
}

.red {
  background-color: #FF8A84;
  border-color: #FF8A84;
  /* color: white; */
}

.grey {
  background-color: #EEEFEE;
  border-color: #EEEFEE;
  /* color: white; */
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
  background: inherit;
  color: black;
  font-style: oblique;
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
