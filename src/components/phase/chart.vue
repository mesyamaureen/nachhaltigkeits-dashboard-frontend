<template>
  <div>
    <line-chart :data="datacollection" :options="options"></line-chart>
  </div>
</template>

<script lang="ts">
import { Line } from 'vue-chartjs'

export default {
  components: {
    LineChart: Line
  },
  data() {
    return {
      datacollection: {
        labels: ['April', 'May', 'June'],
        datasets: [
          {
            label: 'Energieverbrauch',
            backgroundColor: '#f87979',
            data: [40, 60, 50]
          },
          {
            label: 'Gesamt Transport weg',
            backgroundColor: '#7CB342',
            data: [50, 70, 60]
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
/* Add your styles here */
</style>
