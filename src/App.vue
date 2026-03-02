<template>
  <div class="app">
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 路由视图 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>