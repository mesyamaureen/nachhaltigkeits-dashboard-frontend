<template>
  <div class="popup-overlay" v-if="show">
    <div class="popup-content">
      <button class="close-button" @click="closePopup">X</button>
      <h2>KPI hinzufügen</h2>
      <div class="form-group">
        <label for="kpi-select">Wählen Sie eine KPI aus:</label>
        <select id="kpi-select" v-model="selectedKpi">
          <option v-for="kpi in kpi" :key="kpi.id" :value="kpi.id">
            {{ kpi.name }}
          </option>
        </select>
      </div>
      <button class="confirm-button" @click="confirmSelection">Hinzufügen</button>
      <button class="cancel-button" @click="closePopup">Abbrechen</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean,
  kpi: Array
});

const emits = defineEmits(['close', 'confirm']);

const selectedKpi = ref(null);

const closePopup = () => {
  emits('close');
};

const confirmSelection = () => {
  if (selectedKpi.value) {
    emits('confirm', selectedKpi.value);
  } else {
    alert('Bitte wählen Sie eine KPI aus.');
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
  z-index: 1000; /* Ensure the popup is in the foreground */
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
