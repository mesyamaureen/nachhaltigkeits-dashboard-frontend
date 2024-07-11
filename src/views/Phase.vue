<script lang="ts">
import Chart from '@/components/phase/chart.vue'

export default {
  name: 'Phase',
  components: {
    Chart
  }
}

</script>

<template>
  <div>
    <!-- Your view content here -->
    <div class="content">
      <h1>Planungsphase</h1>
      <!-- Glue kleine Kachel Component here -->
      <Chart />
    </div>
  </div>
</template>


<style>
.content {
  padding-left: 175px;
}
</style>
