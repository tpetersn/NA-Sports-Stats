<template>
  <div>
    <div class="controls">
      <label>
        {{ $t('team') }}:
        <select v-model="selectedTeam">
          <option v-for="team in Teams" :key="team">{{ team }}</option>
        </select>
      </label>

      <label>
        {{ $t('stat') }}:
        <select v-model="selectedStat">
          <option v-for="stat in stats" :key="stat" :value="stat">
            {{ $t(stat) }}
          </option>
        </select>
      </label>


      <label>
        {{ $t('compare') }}:
        <select v-model="compareTeam">
          <option value="">{{ $t('none') }}</option>
          <option
            v-for="team in Teams"
            :key="team"
            :value="team"
            :disabled="team === selectedTeam"
          >
            {{ team }}
          </option>
        </select>
      </label>
    </div>

    <div class="chart-wrapper">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { mlsStats } from '../data/mlsStats.js'
import { useI18n } from 'vue-i18n'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const stats = ['points', 'wins', 'losses', 'ties']
const compareTeam = ref('')
const { t } = useI18n()

// Extract all teams
const Teams = Array.from(
  new Set(
    Object.values(mlsStats)
      .flat()
      .map(team => team.team)
  )
).sort()

const selectedTeam = ref('Toronto')
const selectedStat = ref('points')

const chartData = computed(() => {
  const years = Object.keys(mlsStats).sort()

  const primaryTeamData = years.map(year => {
    const teamYearData = mlsStats[year].find(t => t.team === selectedTeam.value)
    return teamYearData ? teamYearData[selectedStat.value] : null
  })

  const compareTeamData = compareTeam.value
    ? years.map(year => {
        const teamYearData = mlsStats[year].find(t => t.team === compareTeam.value)
        return teamYearData ? teamYearData[selectedStat.value] : null
      })
    : null

  const datasets = [
    {
      label: selectedTeam.value,
      data: primaryTeamData,
      borderColor: 'rgba(54, 162, 235, 1)',      
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: false,
      tension: 0.3
    }
  ]

  if (compareTeamData) {
    datasets.push({
      label: compareTeam.value,
      data: compareTeamData,
      borderColor: 'rgba(255, 99, 132, 1)',     
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: false,
      tension: 0.3,
      borderDash: [5, 5]                        
    })
  }

  return {
    labels: years,
    datasets
  }
})

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
    title: {
      display: true,
      text: compareTeam.value
        ? `${selectedTeam.value} vs ${compareTeam.value} — ${t(selectedStat.value)}`
        : `${selectedTeam.value} — ${t(selectedStat.value)}`,
      font: { size: 22 },
      padding: { top: 10, bottom: 20 }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: t('amount')
      }
    },
    x: {
      title: {
        display: true,
        text: t('year')
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
  height: 600px;
  padding: 1rem;
  border: 1px solid #ccc;
  background: white;
}
</style>
