<template>
    <div class="popup-overlay" v-if="show">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">X</button>
        <h2>Kennzahl löschen</h2>
        <p>Möchten Sie die Kennzahl "{{ kpiName }}" wirklich löschen?</p>
        <button class="confirm-button" @click="confirmDeletion">Löschen</button>
        <button class="cancel-button" @click="closePopup">Abbrechen</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    show: Boolean,
    kpiName: String
  });
  const emits = defineEmits(['close', 'confirm']);
  
  const closePopup = () => {
    emits('close');
  };
  
  const confirmDeletion = () => {
    emits('confirm');
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
  
  .confirm-button, .cancel-button {
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
  