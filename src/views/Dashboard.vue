<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import sidebarNav from '@/components/SidebarMenu.vue'
import type dashboard from '@/components/cDashboard.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';
import kpiBox from '@/components/kpiBox.vue'
import AddKpiPopup from '@/components/AddKpiPopup.vue';
import DeleteKpiPopup from '@/components/DeleteKpiPopup.vue';

const kpis = ref([]);
const showAddPopup = ref(false);
const showDeletePopup = ref(false);
const kpiToDelete = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/kpis');
    console.log('Fetched KPIs:', response.data);  // Konsolenausgabe der Daten
    kpis.value = response.data;
  } catch (error) {
    console.error('Error fetching kpis:', error);
  }
});

const openAddPopup = () => {
  console.log('Plus-Button clicked');  // Konsolenausgabe
  showAddPopup.value = true;
};

const closeAddPopup = () => {
  console.log('Close Add Popup');  // Konsolenausgabe
  showAddPopup.value = false;
};

const addKpi = (newKpi) => {
  console.log('Added KPI:', newKpi);  // Konsolenausgabe
  kpis.value.push(newKpi);
};

const confirmDeleteKpi = (index) => {
  kpiToDelete.value = index;
  showDeletePopup.value = true;
};

const deleteKpi = async () => {
  if (kpiToDelete.value !== null) {
    try {
      await axios.delete(`http://localhost:8080/api/kpis/${kpis.value[kpiToDelete.value].id}`);
      kpis.value.splice(kpiToDelete.value, 1);
      console.log('Deleted KPI:', kpiToDelete.value);  // Konsolenausgabe
    } catch (error) {
      console.error('Error deleting kpi:', error);
    }
  }
  showDeletePopup.value = false;
  kpiToDelete.value = null;
};
</script>

<template>
  <main class="content">
    <div class="title">
      <h1>Übersicht</h1>
      <button class="circle-button" @click="openAddPopup">+</button>
    </div>
    <div class="items">
      <kpiBox v-for="(kpi, index) in kpis" :key="index" :index="index" @delete="confirmDeleteKpi">
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
        <template #heading>{{ kpi.name }}</template>
        <p>{{ kpi.co2 }}</p>
      </kpiBox>
    </div>
    <AddKpiPopup :show="showAddPopup" @close="closeAddPopup" @added="addKpi" />
    <DeleteKpiPopup :show="showDeletePopup" :kpiName="kpis[kpiToDelete]?.name" @confirm="deleteKpi" @close="() => showDeletePopup.value = false" />
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

.logo {
 display: flex;
 place-items: center;
 margin: 0 0 0 0;
}

nav {
 width: 100%;
 font-size: 12px;
 text-align: end;
 margin-top: 2rem;
}

nav a.router-link-exact-active {
 color: var(--color-text);
}

nav a.router-link-exact-active:hover {
 background-color: #ffffff;
}

nav a {
 display: inline-block;
 padding: 0 1rem;
 border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
 border: 0;
}

@media (min-width: 1024px) {
 header {
   display: flex;
   flex-direction: row;
   place-items: center;
   padding-right: calc(var(--section-gap) / 2);
   width: fit-content;
 }

 .logo {
   margin: 2rem 1rem 0 0;
   display: flex;
   place-items: center;
 }

 header .wrapper {
   display: flex;
   place-items: flex-start;
   flex-wrap: wrap;
   flex-direction: column;
 }

 nav {
   text-align: end;
   margin-left: -1rem;
   font-size: 1rem;
   display: flex;
   justify-content: end;
   padding: 1rem 0;
   margin-top: 1rem;
 }
}

.circle-button {
 display: flex;
 justify-content: center;
 align-items: center;
 width: 50px; /* Adjust size as needed */
 height: 50px; /* Adjust size as needed */
 background-color: #000000; /* Change to desired color */
 color: #fff;
 border: none;
 border-radius: 50%;
 font-size: 1.5rem; /* Adjust font size as needed */
 cursor: pointer;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 transition:
   background-color 0.3s,
   transform 0.3s;
 position: absolute;
 top: 20px;
 right: 20px;
}

.circle-button:hover {
 background-color: #0056b3; /* Change to desired hover color */
 transform: scale(1.1);
}

.circle-button:active {
 transform: scale(0.9);
}
</style>
