<template>
  <div class="home-container">
    <!-- Hero Image + Tagline -->
    <div class="hero-section">
      <img src="/images/hockey.webp" alt="hockey rink" class="hero-img" />
      <p class="hero-text">This page shows NHL teams statistics<br />from the past ten years.</p>
    </div>

  </div>
  <div>
    <h2>NHL Team Statistics</h2>
    <BarChart/>
</div>
  <div>
    <h2>MLS Team Statistics</h2>
    <LineChart/>
</div>

</template>

<script setup>
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';

</script>

<style scoped>
.home-container {
  width: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefefe;
}

/* Hero section */
.hero-section {
  text-align: center;
  background-color: #dff6fd;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.hero-img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.hero-text {
  font-style: italic;
  font-size: 1rem;
  margin: 0;
}

/* Grid for buttons */
.content-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 1rem;
}

.left-box, .right-box {
  text-align: center;
  max-width: 250px;
}

.action-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: lightgray;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: #c0c0c0;
}
</style>
