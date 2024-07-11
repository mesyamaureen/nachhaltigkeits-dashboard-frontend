<template>
  <main class="content">
    <div class="title">
      <h1>Übersicht</h1>
      <button class="circle-button" @click="openPopup">+</button>
    </div>

    <AddKpiPopup :show="showPopup" :kpi="availableKpi" @close="closePopup" @confirm="confirmSelection" />

    <div class="items">
      <kpiBox
        v-for="(kpiItem, index) in kpi"
        :key="index"
        :kpi="kpiItem"
        @remove-kpi="removeKpi(kpiItem.id)">
        <template #heading>{{ kpiItem.name }}</template>
        <template #content>
          {{ kpiItem.co2 }} Co² Verbrauch
        </template>
      </kpiBox>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
// @ts-ignore
import { fetchKpi } from '@/api/api.js';
import kpiBox from '@/components/kpiBox.vue';
import AddKpiPopup from '@/components/AddKpiPopup.vue';

interface Kpi {
  id: number;
  name: string;
  co2: number;
}

const kpi = ref<Kpi[]>([]);
const allKpi = ref<Kpi[]>([]);
const showPopup = ref(false);

const openPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const loadKpi = async () => {
  try {
    const fetchedKpi = await fetchKpi();
    allKpi.value = fetchedKpi.map((kpiItem: Kpi) => ({ ...kpiItem }));
    loadSelectedKpi();
  } catch (error) {
    console.error('Failed to load KPIs:', error);
  }
};

const loadSelectedKpi = () => {
  const selectedKpiIds = JSON.parse(localStorage.getItem('selectedKpi') || '[]');
  const selectedKpi = allKpi.value.filter((kpiItem: Kpi) => selectedKpiIds.includes(kpiItem.id));
  // Sortiere die ausgewählten KPIs nach ID, um eine konsistente Reihenfolge zu gewährleisten
  selectedKpi.sort((a, b) => selectedKpiIds.indexOf(a.id) - selectedKpiIds.indexOf(b.id));
  kpi.value = selectedKpi;
};

const saveSelectedKpi = () => {
  const selectedKpiIds = kpi.value.map((kpiItem: Kpi) => kpiItem.id);
  localStorage.setItem('selectedKpi', JSON.stringify(selectedKpiIds));
};

const removeKpi = (kpiId: number) => {
  kpi.value = kpi.value.filter((kpiItem: Kpi) => kpiItem.id !== kpiId);
  saveSelectedKpi();
  console.log(`KPI ID: ${kpiId} removed`); // Debugging-Ausgabe
};

const confirmSelection = (kpiId: number) => {
  const selectedKpi = allKpi.value.find((kpiItem: Kpi) => kpiItem.id === kpiId);
  if (selectedKpi) {
    kpi.value.push(selectedKpi);
    saveSelectedKpi();
    closePopup();
  }
};

const availableKpi = computed(() => {
  const selectedIds = kpi.value.map((kpiItem: Kpi) => kpiItem.id);
  return allKpi.value.filter((kpiItem: Kpi) => !selectedIds.includes(kpiItem.id));
});

onMounted(() => {
  loadKpi();
});
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 2rem 2rem 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.content {
  padding-left: 175px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
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
