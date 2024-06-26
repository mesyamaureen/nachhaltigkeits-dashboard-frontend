<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchKpi } from '@/api/api.js';
import kpiBox from '@/components/kpiBox.vue'
import AddKpiPopup from '@/components/AddKpiPopup.vue';

const kpi = ref([]);
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
    kpi.value = fetchedKpi.map(kpiItem => ({ ...kpiItem, visible: false }));
    kpi.value.forEach(kpiItem => {
      console.log(`KPI ID: ${kpiItem.id}, Visible: ${kpiItem.visible}`); // Debugging-Ausgabe
    });
  } catch (error) {
    console.error('Failed to load KPIs:', error);
  }
};

const toggleKpiVisibility = (kpiId) => {
  const kpiItem = kpi.value.find(kpi => kpi.id === kpiId);
  if (kpiItem) {
    kpiItem.visible = !kpiItem.visible;
    console.log(`KPI ID: ${kpiId}, Visible: ${kpiItem.visible}`); // Debugging-Ausgabe
  }
};

const confirmSelection = (kpiId) => {
  toggleKpiVisibility(kpiId);
  closePopup();
};

onMounted(() => {
  loadKpi();
});
</script>

<template>
  <main class="content">
    <div class="title">
      <h1>Übersicht</h1>
      <button class="circle-button" @click="openPopup">+</button>
    </div>

    <AddKpiPopup :show="showPopup" :kpi="kpi" @close="closePopup" @confirm="confirmSelection" />

    <div class="items">
      <kpiBox
        v-for="(kpiItem, index) in kpi"
        :key="index"
        v-show="kpiItem.visible"
        :kpi="kpiItem"
        @toggle-visibility="toggleKpiVisibility(kpiItem.id)"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </template>
        <template #heading>{{ kpiItem.name }}</template>
        <p>{{ kpiItem.co2 }}</p>
      </kpiBox>
    </div>
  </main>
</template>

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
