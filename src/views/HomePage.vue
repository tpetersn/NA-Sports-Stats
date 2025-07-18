<template>
  <div class="home-container">
    <div class="description-section">

      <div class="intro-section">
        
        <div class="intro-text">
          <p class="description-text">{{ $t('description1') }}</p>
          <p class="description2-text">{{ $t('description2') }}</p>
          <p class="description3-text">{{ $t('description3') }}</p>
        </div>

        <img src="/images/stadium-seats2.webp" alt="stats icon" class="intro-image" />
      </div>
    


      <div>
        <section id="nhl"></section>

        <div class="banner-images">
          
          <img src="/images/hockey-stadium2.webp" alt="hockey rink" class="sport-img" />

          <img src="/images/nhl-logo4.png" alt="overlay" class="sport-logo">
        </div>
        
        <p class="nhl-description">{{ $t('nhl-description') }}</p>
      </div>

      
      

      <div>
          <h2 class="nhl-stats">{{ $t('nhlStats') }}</h2>
          <BarChart/>
      </div>

      <div>
        <section id="mls"></section>
        <div class="banner-images">
          
          <img src="/images/soccer-pitch2.webp" alt="soccer pitch" class="sport-img" />

          <img src="/images/mls-logo.png" alt="overlay" class="sport-logo">
        </div>
        
        
        <p class="mls-description">{{ $t('mls-description') }}</p>
      </div>


      <div>
        <h2 class="mls-stats">{{$t('mlsStats')}}</h2>
        <LineChart/>
      </div>

      <div>
        <section id="nba"></section>
        <div class="banner-images">
          
          <img src="/images/bball-areana1.webp" alt="basketball arena" class="sport-img" />

          <img src="/images/nba-logo3.png" alt="overlay" class="nba-logo">
        </div>
        
        <p class="mls-description">{{ $t('mls-description') }}</p>
      </div>

      <div>
        <h2 class="nba-stats">{{$t('nbaStats')}}</h2>
        <ColumnChart/>
      </div>


      <div>
        <section id="pga"></section>

        <div class="banner-images">
          
          <img src="/images/golf-course2.png" alt="soccer pitch" class="sport-img" />

          <img src="/images/pga-logo.png" alt="overlay" class="sport-logo">
        </div>

      </div>

      <div>
        <h2 class="nba-stats">{{$t('pgaStats')}}</h2>
        <GolfersList/>
      </div>

    </div>

  </div>


</template>

<script setup>
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';
import ColumnChart from '../components/ColumnChart.vue';
import GolfersList from '../components/GolfersList.vue';
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
  margin-bottom: 0rem;
  
}


.intro-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  flex-wrap: wrap;         
}

.intro-image {
  flex: 1 1 40%;           
  max-width: 600px;       
  aspect-ratio: 16 / 9;    
  width: 100%;            
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #444;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 0;              
}

.intro-text {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 1rem;
}



.banner-images {
  position: relative;
  width: 100%;
}


.sport-img {
  width: 100%;
  max-height: 225px;
  object-fit: cover;
  margin-top: 8rem;
  margin-bottom: 0.5rem;
  border: 1.2px solid #000000;
  border-radius: 2px;
}
.sport-logo {
  position: absolute;
  top: 10vw;    /* adjust as needed */
  left: 10%;   /* adjust as needed */
  width: 150px; /* or scale relative to base image */
  pointer-events: none;
}
.nba-logo {
  position: absolute;
  top: 10vw;    /* adjust as needed */
  left: 10%;   /* adjust as needed */
  width: 250px; /* or scale relative to base image */
  pointer-events: none;
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
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #000;
  text-shadow: 1px 1px 1px #619fa8;
  text-decoration: underline;
  text-align: center;
}

.description2-text,
.description3-text {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #111;
  line-height: 1.5;
  text-shadow: 0.5px 0.5px 0.5px #aaa;
  text-align: center;
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

@media (max-width: 1000px) {
  .intro-section {
    flex-direction: column;
    text-align: center;
    margin: 0;
    width: 100%;
  }

  .intro-text {
    text-align: center;
    padding: 0;
  }

  .intro-image {
    width: 90%;
    max-width: 100vw;
    max-height: 300px;
    margin-right: 0;
  }
  .sport-img{
    margin-top: 4rem;
  }

}

@media (max-width: 630px) {
  .sport-logo {
    top: 15vw;
  }
  .nba-logo {
    top: 15vw; 
  }
  
}

</style>
