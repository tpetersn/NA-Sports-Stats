<template>
  <footer class="footer">
    
    <p>
      <CopyRightIcon class="copyright-icon" />
      {{ $t('copyrights')}}</p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import CopyRightIcon from '../assets/icons/copyright.vue'

const { t } = useI18n();
</script>

<style scoped>
.footer {
  background-color: #635a5a;
  color: #000000;
  font-weight: bold;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.85rem;
  font-style: italic;
  position: relative;

}
.copyright-icon {
  width: 1rem;
}
</style>
