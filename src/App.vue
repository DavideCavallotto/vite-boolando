<script>

import AppHeaderPage from './components/AppHeaderPage.vue';
import AppMainPage from './components/AppMainPage.vue';
import AppFooterPage from './components/AppFooterPage.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {
    AppHeaderPage,
    AppFooterPage
  },
  methods: {
    

  }
}
</script>

<template>
 <AppHeaderPage/>
 <AppFooterPage/>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
