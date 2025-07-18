<template>
  <div>
    <!-- Dropdowns -->
    <div class="controls">
       <label>
          {{ $t('season') }}:
          <select v-model="selectedSeason">
            <option v-for="season in seasons" :key="season" :value="season">
              {{ season }}
            </option>
          </select>
        </label>

      <label>
        {{ $t('stat') }}:
        <select v-model="selectedMetric">
          <option v-for="metric in metrics" :key="metric" :value="metric">
            {{ $t(metric) }}
          </option>
        </select>
      </label>

      <label>
        {{ $t('sort') }}:
        <select v-model="sortOrder">
          <option value="desc">{{ $t('highToLow') }}</option>
          <option value="asc">{{ $t('lowToHigh') }}</option>
        </select>
      </label>
    </div>

    <!-- Chart -->
    <div class="chart-wrapper">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { nhlStats } from '../data/nhlStats.js'
import { useI18n } from 'vue-i18n'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// dropdown options
const seasons = Object.keys(nhlStats)
const selectedSeason = ref('2024-2025')
const metrics = ['points', 'wins', 'losses', 'ties']
const selectedMetric = ref('points')
const sortOrder = ref('desc')

const { t } = useI18n()

// sort & prepare data
const sortedStats = computed(() => {
  const stats = [...nhlStats[selectedSeason.value]]
  stats.sort((a, b) => {
    return sortOrder.value === 'asc'
      ? a[selectedMetric.value] - b[selectedMetric.value]
      : b[selectedMetric.value] - a[selectedMetric.value]
  })
  return stats
})

const chartData = computed(() => ({
  labels: sortedStats.value.map(team => team.team),
  datasets: [{
    label: selectedMetric.value.charAt(0).toUpperCase() + selectedMetric.value.slice(1),
    data: sortedStats.value.map(team => team[selectedMetric.value]),
    backgroundColor: '#009fbb',
    barThickness: 8
  }]
}))
const chartOptions = computed(() => ({
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: { display: false },

  },

  layout: {
    padding: {
      left: 40     
    }
  },

  scales: {
    x: {
      position: 'top',     
      title: {
        display: true,
        text: t(selectedMetric.value),  
        font: { size: 14 },
        padding: { bottom: 10 }   
      },
      beginAtZero: true
    },

    y: {
      
      ticks: {
        font: { size: 18 }
      },
      title: {
        display: true,
        text: t('teams'),
        font: { size: 20 },
        padding: { top: -35, bottom: 20 }      
      }
    }
  }
}))


</script>

<style scoped>
.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

}
.chart-wrapper {
  height: 900px;
  width: 100%;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 1rem;
  background: white;
  
}


</style>
