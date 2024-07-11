<template>
    <div>
      <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler)
  
  const datacollection = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Energieverbrauch',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [40, 20, 12, 39, 10, 40, 39],
        fill: true,
      },
    ],
  }
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    height: 40vh;
    width: 80vw;
  }
  </style>
  