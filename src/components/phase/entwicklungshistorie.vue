<template>
  <div class="container">
    <h3 class="centered">Energieverbrauch</h3>
    <div class="frame">
      <svg class="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(34, 139, 34);stop-opacity:1" />
            <stop offset="100%" style="stop-color:white;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(60, 179, 113);stop-opacity:1" />
            <stop offset="100%" style="stop-color:white;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(144, 238, 144);stop-opacity:1" />
            <stop offset="100%" style="stop-color:white;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path fill="url(#waveGradient1)" stroke="rgb(0, 100, 0)" stroke-width="2" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,85.3C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="url(#waveGradient2)" stroke="rgb(0, 100, 0)" stroke-width="2" fill-opacity="0.7" d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="url(#waveGradient3)" stroke="rgb(0, 100, 0)" stroke-width="2" fill-opacity="0.5" d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,149.3C672,149,768,139,864,144C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh; /* Full viewport height */
}

.centered {
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
}

.frame {
  position: relative;
  width: 1200px;
  height: 450px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
  </style>