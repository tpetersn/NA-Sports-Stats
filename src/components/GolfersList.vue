<template>
  <div class="golfers-table">
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
        {{ $t('tournament') }}:
        <select v-model="selectedTournament">
          <option v-for="tourney in tournaments" :key="tourney" :value="tourney">
            {{ tourney }}
          </option>
        </select>
      </label>
    </div>

    <!-- Table -->
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>{{ $t('rank') }}</th>
            <th>{{ $t('player') }}</th>

            <!-- World Rankings columns -->
            <template v-if="isWorld">
              <th>{{ $t('avgPoints') }}</th>
              <th>{{ $t('totalPoints') }}</th>
              <th>{{ $t('pointsLost') }}</th>
              <th>{{ $t('pointsGained') }}</th>
            </template>

            <!-- Major-specific columns -->
            <template v-else>
              <th>{{ $t('totalScore') }}</th>
              <th>{{ $t('playoffScore') }}</th>
            </template>
          </tr>
        </thead>

        <tbody>
          <tr v-for="golfer in filteredGolfers" :key="golfer.name">
            <td>{{ golfer.rank }}</td>
            <td>{{ golfer.name }}</td>

            <!-- World Rankings cells -->
            <template v-if="isWorld">
              <td :class="highlightPositive(golfer.avgPoints)">{{ golfer.avgPoints.toFixed(4) }}</td>
              <td>{{ golfer.totalPoints.toFixed(4) }}</td>
              <td :class="highlightNegative(golfer.pointsLost)">{{ golfer.pointsLost.toFixed(4) }}</td>
              <td>{{ golfer.pointsGained.toFixed(4) }}</td>
            </template>

            <!-- Major-specific cells -->
            <template v-else>
              <td v-if="golfer.totalScore !== ''">{{ golfer.totalScore }}</td>
              <td v-if="golfer.playoffScore !== ''">{{ golfer.playoffScore }}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { pgaStats } from '../data/pgaStats.js'
import { majorStats } from '../data/majorStats.js'

const { t } = useI18n()

const seasons = Object.keys(pgaStats).sort().reverse()
const selectedSeason = ref(seasons[0])

const tournaments = [
  'World Rankings',
  'Masters',
  'US Open',
  'The Open',
  'PGA Championship'
]
const selectedTournament = ref('World Rankings')

const isWorld = computed(() => selectedTournament.value === 'World Rankings')

const filteredGolfers = computed(() => {
  const season = selectedSeason.value
  const tournament = selectedTournament.value

  if (isWorld.value) {
    return (pgaStats[season] || []).slice(0, 32)
  } else {
    return (majorStats[season]?.[tournament] || []).slice(0, 32)
  }
})

const highlightPositive = value => (value > 0 ? 'green' : '')
const highlightNegative = value => (value < 0 ? 'red' : '')
</script>

<style scoped>
.golfers-table {
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  background: white;
  border: 1px solid #ccc;
}

.controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

label {
  font-weight: 500;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

thead {
  background-color: #f8f8f8;
  font-weight: bold;
}

th, td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.green {
  color: #009900;
  font-weight: 600;
}

.red {
  color: #cc0000;
  font-weight: 600;
}
</style>
