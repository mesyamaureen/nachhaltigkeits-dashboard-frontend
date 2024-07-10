<template>
  <div class="chart-item">
    <div class="chart-item__content">
      <h3 class="chart-item__heading">
        <slot name="heading" />
      </h3>
      <div class="chart-item__description">
        <slot name="content" />
        <div>
          <Bar :data="datacollection" :options="options" />
        </div>
      </div>
    </div>
    <button class="chart-item__button" @click="$emit('toggle-visibility')">X</button>
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  components: {
    Bar
  },
  data() {
    return {
      datacollection: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style scoped>
.chart-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
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

.chart-item.hidden {
  visibility: hidden;
  opacity: 0;
}

.chart-item__content {
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
  width: fit-content;
}

.chart-item__heading {
  font-size: 1.5rem; /* Increase font size */
  font-weight: bold; /* Bold text */
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.chart-item__description {
  font-size: large;
  font-weight: 300;
  color: var(--color-text);
}

.chart-item__button {
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
  .chart-item {
    margin-top: 0;
    padding: 0.4rem 0 1rem 2rem;
  }

  .chart-item__icon {
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
