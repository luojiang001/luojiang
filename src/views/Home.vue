<template>
  <div class="flex flex-col justify-center items-center p-4 min-h-screen">
    <div class="text-center max-w-3xl">
      <h1 class="text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
        赵佳旭
      </h1>
      <p class="text-2xl text-gray-600 mb-8 animate-fade-in-delay">
        计算机科学与技术本科，全栈 / 鸿蒙开发方向
      </p>
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <router-link to="/about" class="btn">
          了解更多
        </router-link>
        <router-link to="/contact" class="btn btn-secondary">
          联系我
        </router-link>
      </div>
    </div>
    <div class="w-full max-w-6xl">
      <div class="grid grid-cols-3 gap-6">
        <router-link to="/about" class="card flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span class="text-primary text-2xl">👤</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">关于我</h3>
          <p class="text-gray-600">个人基本信息与教育经历</p>
        </router-link>
        <router-link to="/skills" class="card flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span class="text-primary text-2xl">💻</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">专业技能</h3>
          <p class="text-gray-600">后端、前端与项目实践能力</p>
        </router-link>
        <router-link to="/projects" class="card flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span class="text-primary text-2xl">📁</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">项目经历</h3>
          <p class="text-gray-600">核心项目与实战经验</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 首页组件
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

.bg-blue-100 {
  background-color: #dbeafe;
}

.rounded-full {
  border-radius: 9999px;
}

.w-16 {
  width: 4rem;
}

.h-16 {
  height: 4rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.text-primary {
  color: var(--primary-color);
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.flex-col {
  flex-direction: column;
}

.flex {
  display: flex;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.grid {
  display: grid;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.text-center {
  text-align: center;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-6xl {
  max-width: 72rem;
}

.w-full {
  width: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.p-4 {
  padding: 1rem;
}

@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .text-6xl {
    font-size: 2.5rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
}
</style>