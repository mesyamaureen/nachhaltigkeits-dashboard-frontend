<!-- src/components/AddKpiPopup.vue -->
<template>
    <div class="popup-overlay" v-if="show">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">X</button>
        <h2>Kennzahl hinzufügen</h2>
        <form @submit.prevent="addKpi">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="kpi.name" required />
          </div>
          <div class="form-group">
            <label for="co2">CO2 (Kg)</label>
            <input type="number" id="co2" v-model="kpi.co2" required />
          </div>
          <button type="submit" class="add-button">Hinzufügen</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  import axios from 'axios';
  
  const props = defineProps({
    show: Boolean
  });
  const emits = defineEmits(['close', 'added']);
  
  const kpi = ref({
    name: '',
    co2: 0
  });
  
  const closePopup = () => {
    emits('close');
  };
  
  const addKpi = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/kpis', kpi.value);
      emits('added', response.data);
      closePopup();
    } catch (error) {
      console.error('Error adding kpi:', error);
    }
  };
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
  
  .form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .add-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .add-button:hover {
    background-color: #0056b3;
  }
  </style>
  