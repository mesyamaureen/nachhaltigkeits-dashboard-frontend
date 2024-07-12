<script lang="ts">
import Chart from '@/components/phase/chart.vue'
import Entwicklungshistorie from '@/components/phase/entwicklungshistorie.vue'

export default {
  name: 'Phase',
  components: {
    Chart,
    Entwicklungshistorie
  }
}

</script>

<template>
  <div>
    <!-- Your view content here -->
    <div class="content">
      <h1>Planungsphase</h1>
      <!-- Glue kleine Kachel Component here -->
      <Entwicklungshistorie />
      <Chart />
    </div>
  </div>
</template>


<style>
.content {
  padding-left: 175px;
}
</style>
