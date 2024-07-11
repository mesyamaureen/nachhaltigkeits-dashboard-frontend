<template>
  <div>
    <button class="circle-button" @click="showPopup = true">+</button>
    <div class="charts-container">
      <div v-for="(chart, index) in charts" :key="index" class="chart-item">
        <div class="chart-item__content">
          <h3 class="chart-item__heading">{{ chart.heading }}</h3>
          <div class="chart-item__description">
            {{ chart.content }}
            <div>
              <Bar v-if="chart.type === 'bar'" :data="chart.data" :options="chart.options" />
            </div>
          </div>
        </div>
        <button class="chart-item__button" @click="removeChart(index)">X</button>
      </div>
    </div>
    <AddChartPopup v-if="showPopup" @close="showPopup = false" @add-chart="addChart" />
  </div>
</template>

<script lang="ts">
import AddChartPopup from '@/components/phase/AddChartPopup.vue';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


interface ChartData {
  labels: string[];
  datasets: { label: string; backgroundColor: string; data: number[] }[];
}

interface Chart {
  heading: string;
  content: string;
  type: string;
  data: ChartData;
  options: {
    responsive: boolean;
    maintainAspectRatio: boolean;
  };
}


export default {
  components: {
    Bar,
    AddChartPopup
  },
  data() {
    return {
      showPopup: false,
      charts: [] as Chart[],
      chartCounter: 1 // Initialize chart counter
    }
  },
  created() {
    // Laden der Charts aus dem LocalStorage
    const storedCharts = localStorage.getItem('charts');
    if (storedCharts) {
      this.charts = JSON.parse(storedCharts) as Chart[];
      this.chartCounter = this.charts.length ? Math.max(...this.charts.map(chart => parseInt(chart.heading.split(' ')[1]))) + 1 : 1;
    }
  },
  methods: {
    saveCharts() {
      localStorage.setItem('charts', JSON.stringify(this.charts));
    },
    addChart(chartType: string) {
      this.charts.push({
        heading: `Chart ${this.chartCounter}`,
        content: `Description for chart ${this.chartCounter}`,
        type: chartType,
        data: {
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
              backgroundColor: chartType === 'bar' ? '#f87979' : '#0000ff',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
      this.chartCounter++; // Increment chart counter
      this.saveCharts(); // Save charts to localStorage
      this.showPopup = false;
    },
    removeChart(index: number) {
      this.charts.splice(index, 1);
      this.saveCharts(); // Save charts to localStorage
    }
  }
}
</script>

<style scoped>
.charts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem; /* Optional: Adds space between chart items */
}

.chart-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: fit-content;
  margin-top: 2rem;
  border: 2px solid grey;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 1rem;
  visibility: visible;
  transition: visibility 0.3s, opacity 0.3s;
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
.circle-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
  position: absolute;
  top: 20px;
  right: 20px;
}

.circle-button:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}

.circle-button:active {
  transform: scale(0.9);
}
</style>
