<template>
  <div class="popup-overlay">
    <div class="popup-content">
      <button class="close-button" @click="$emit('close')">X</button>
      <h3>Select Chart Type</h3>
      <div class="form-group">
        <label for="chart-select">Wählen Sie einen Chart-Typ aus:</label>
        <select id="chart-select" v-model="selectedChartType">
          <option value="bar">Bar Chart</option>
        </select>
      </div>
      <div class="form-group">
        <label for="anlass-select">Wählen Sie eine Anlass-Kategorie aus:</label>
        <select id="anlass-select" v-model="selectedAnlass">
          <option v-for="anlass in uniqueAnlass" :key="anlass" :value="anlass">{{ anlass }}</option>
        </select>
      </div>
      <button class="confirm-button" @click="addChart">Hinzufügen</button>
      <button class="cancel-button" @click="$emit('close')">Abbrechen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
// @ts-ignore
import { fetchOrganisatorisch } from '@/api/api.js';

interface organisatorischData {
  id: number;
  datum: Date;
  zeit: string;
  dauer: number;
  transportweg: string;
  anlass: string;
  energieverbrauch: number | null;
  evTransportweg:number | null;
}
// const props = defineProps<{
//   show: boolean;
//   organisatorischData: organisatorischData[];
// }>();
// export default {
//   data() {
//     return {
//       selectedChartType: 'bar',
//       organisatorischData: []
//     }
//   },
//   async created() {
//     try {
//       const data = await fetchOrganisatorisch()
//       this.organisatorischData = data
//     } catch (error) {
//       console.error('Error fetching organisatorisch data:', error)
//     }
//   },
//   methods: {
//     addChart() {
//       this.$emit('add-chart', this.selectedChartType)
//     }
//   }
// }
export default defineComponent({
  name: 'AddChartPopup',
  emits: ['close', 'add-chart'],
  setup(_, { emit }) {
    const selectedChartType = ref('bar');
    const organisatorisch = ref<organisatorischData[]>([]);
    const selectedAnlass = ref<string | null>(null);

    const loadOrganisatorisch = async () => {
      try {
        organisatorisch.value = await fetchOrganisatorisch();
      } catch (error) {
        console.error('Failed to load organisatorisch:', error);
      }
    };

    const uniqueAnlass = computed(() => {
      const anlassSet = new Set<string>();
      organisatorisch.value.forEach(item => {
        anlassSet.add(item.anlass);
      });
      return Array.from(anlassSet);
    });

    onMounted(() => {
      loadOrganisatorisch();
    });

    const addChart = () => {
      if (selectedAnlass.value) {
        emit('add-chart', { chartType: selectedChartType.value, anlass: selectedAnlass.value });
      }
    };

    return {
      selectedChartType,
      organisatorisch,
      selectedAnlass,
      uniqueAnlass,
      addChart,
    };
  },
});
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  width: 400px;
  max-width: 80%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.confirm-button,
.cancel-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}

.confirm-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: grey;
}

.cancel-button:hover {
  background-color: darkgrey;
}
</style>
