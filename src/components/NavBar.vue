<template>
  <nav class="ff-navbar">
    <!-- Left: Title -->
    <div class="ff-title">{{ $t('title') }}</div>

    <!-- Right: Language Selector -->
    <div class="ff-lang-selector">
      <GlobeIcon class="globe-icon" />
      <select v-model="currentLocale" @change="changeLanguage">
        <option v-for="(langName, localeCode) in languages" :key="localeCode" :value="localeCode">
          {{ langName }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import GlobeIcon from '../assets/icons/globe.vue' 

const { locale } = useI18n()

const languages = {
  en: 'English',
  es: 'Español'
}

const currentLocale = ref(locale.value)

function changeLanguage() {
  locale.value = currentLocale.value
}
</script>

<style scoped>
.ff-navbar {
  width: 100%;
  margin: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #619fa8;
  border: 2px solid #555555;
}

.ff-title {
  font-size: 1.8rem;
  color: black;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.788);
}

.ff-lang-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;

}

select {
  font-size: 1rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #000000;
  color: #ffffff;
}

.globe-icon {
  width: 20px;
  height: 20px;
}
</style>
