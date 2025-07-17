<template>
  <div>
    <!-- Controls -->
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
        {{ $t('leftStat') }}:
        <select v-model="leftMetric">
          <option v-for="metric in metrics" :key="metric" :value="metric">
            {{ $t(metric) }}
          </option>
        </select>
      </label>

      <label>
        {{ $t('rightStat') }}:
        <select v-model="rightMetric">
          <option v-for="metric in metrics" :key="metric" :value="metric">
            {{ $t(metric) }}
          </option>
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
import { nbaStats } from '../data/nbaStats.js'
import { useI18n } from 'vue-i18n'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const { t } = useI18n()

// Stats available
const seasons = Object.keys(nbaStats)
const metrics = ['points', 'wins', 'losses', 'ties']
const selectedSeason = ref('2025')
const leftMetric = ref('wins')
const rightMetric = ref('losses')


const chartData = computed(() => {
  const teams = nbaStats[selectedSeason.value]

  return {
    labels: teams.map(t => t.team),
    datasets: [
      {
        label: t(leftMetric.value),
        data: teams.map(t => -t[leftMetric.value]), // NEGATIVE for left
        backgroundColor: 'rgba(255, 99, 132, 0.7)'
      },
      {
        label: t(rightMetric.value),
        data: teams.map(t => t[rightMetric.value]), // POSITIVE for right
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      }
    ]
  }
})
const chartOptions = computed(() => {
  const teams = nbaStats[selectedSeason.value]
  const leftData = teams.map(t => t[leftMetric.value])
  const rightData = teams.map(t => t[rightMetric.value])
  const maxVal = Math.max(...leftData, ...rightData)

  return {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: `${selectedSeason.value} — ${t(leftMetric.value)} / ${t(rightMetric.value)}`
      },
      tooltip: {
        callbacks: {
          label: context => {
            const val = Math.abs(context.raw)
            return `${context.dataset.label}: ${val}`
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        min: -maxVal,
        max: maxVal,
        ticks: {
          callback: val => Math.abs(val)
        }
      },
      y: {
        stacked: true
      }
    }
  }
})

</script>

<style scoped>
.controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.chart-wrapper {
  height: 700px;
  background: white;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
