<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        赵佳旭
      </router-link>
      
      <!-- 桌面端导航 -->
      <div class="navbar-menu">
        <router-link to="/" class="navbar-link" active-class="active">
          首页
        </router-link>
        <router-link to="/about" class="navbar-link" active-class="active">
          关于我
        </router-link>
        <router-link to="/skills" class="navbar-link" active-class="active">
          专业技能
        </router-link>
        <router-link to="/projects" class="navbar-link" active-class="active">
          项目经历
        </router-link>
        <router-link to="/contact" class="navbar-link" active-class="active">
          联系方式
        </router-link>
      </div>
      
      <!-- 移动端菜单按钮 -->
      <button @click="toggleMenu" class="navbar-toggle">
        {{ menuOpen ? '✕' : '☰' }}
      </button>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div :class="['mobile-menu', { 'open': menuOpen }]">
      <router-link to="/" class="navbar-link" active-class="active" @click="menuOpen = false">
        首页
      </router-link>
      <router-link to="/about" class="navbar-link" active-class="active" @click="menuOpen = false">
        关于我
      </router-link>
      <router-link to="/skills" class="navbar-link" active-class="active" @click="menuOpen = false">
        专业技能
      </router-link>
      <router-link to="/projects" class="navbar-link" active-class="active" @click="menuOpen = false">
        项目经历
      </router-link>
      <router-link to="/contact" class="navbar-link" active-class="active" @click="menuOpen = false">
        联系方式
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isScrolled = ref(false);

// 切换菜单
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>