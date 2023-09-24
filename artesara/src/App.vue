<template>
  <div class="app-container">
    
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component"/>
      </transition>
    </router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>

body {
  margin: 0 !important; 
  padding: 0 !important;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: #e6e3e3;
}

</style>
