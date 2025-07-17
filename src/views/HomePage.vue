<template>
  <div class="home-container">
    <div class="description-section">
      <p class="description-text">{{ $t('description') }}</p>
      <img src="/images/hockey-stadium2.webp" alt="hockey rink" class="hockey-img" />
      <p class="nhl-description">{{ $t('nhl-description') }}</p>

      
      

      <div>
          <h2 class="nhl-stats">{{ $t('nhlStats') }}</h2>
          <BarChart/>
      </div>

      <div>
        <img src="/images/soccer-pitch2.webp" alt="hockey rink" class="soccer-img" />
        <p class="mls-description">{{ $t('mls-description') }}</p>
      </div>


      <div>
        <h2 class="mls-stats">{{$t('mlsStats')}}</h2>
        <LineChart/>
      </div>

      <div>
        <h2 class="nba-stats">{{$t('nbaStats')}}</h2>
        <ColumnChart/>
      </div>

    </div>

  </div>


</template>

<script setup>
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';
import ColumnChart from '../components/ColumnChart.vue';
import { useI18n} from 'vue-i18n';

</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  flex-direction:row;
  align-items: center;
  background-color: #d42f2f;
}

.description-section {
  text-align: center;
  background-color: #fffce2;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.hockey-img {
  width: 100%;
  max-height: 225px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border: 1.2px solid #000000;
  border-radius: 2px;
}
.soccer-img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border: 1.2px solid #000000;
  border-radius: 2px;

}

.description-text {
  font-style: italic;
  font-size: 1.75rem;
  margin:3.8rem;
  font-weight: bold;
  color: #000000;
  text-shadow: 1px 1px 1px #619fa8;
}

.nhl-description {
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
  color: #000000;
  text-shadow: 1px 1px 1px rgba(202, 202, 202, 0.788);
}
.mls-description {
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
  color: #000000;
  text-shadow: 1px 1px 1px rgba(202, 202, 202, 0.788);
}

.nhl-stats {
  text-align: center;
  font-size: 2rem;
  margin: 1.5rem;
  font-weight: bold;
  color: #000000;
  text-shadow: 1px 1px 1px rgba(202, 202, 202, 0.788);
  border-bottom: 1px solid #707070;
}
.mls-stats {
  text-align: center;
  font-size: 2rem;
  margin: 1.5rem;
  font-weight: bold;
  color: #000000;
  text-shadow: 1px 1px 1px rgba(202, 202, 202, 0.788);
  border-bottom: 1px solid #707070;
}


</style>
