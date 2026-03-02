<template>
  <div class="container">
    <h2 class="section-title">专业技能</h2>
    <div class="space-y-8">
      <!-- 后端开发 -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          <span class="text-primary">⚙️</span>
          后端开发
        </h3>
        <div class="space-y-2">
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>熟练掌握 Java 开发技术</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>Maven 项目构建与依赖管理</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>MyBatis 数据库增删改查</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>SpringBoot 框架</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>Redis 缓存技术</span>
          </div>
        </div>
      </div>
      
      <!-- 前端开发 -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          <span class="text-primary">🎨</span>
          前端开发
        </h3>
        <div class="space-y-2">
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>掌握 HTML、CSS、基础 JavaScript</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>Web 页面布局与交互</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>鸿蒙前端开发</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>应用组件开发与基础交互</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>多端开发基础</span>
          </div>
        </div>
      </div>
      
      <!-- 项目实践 -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          <span class="text-primary">📋</span>
          项目实践
        </h3>
        <div class="space-y-2">
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>扎实的全栈实战经验</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>主导鸿蒙 + SpringBoot+Vue 三端交互的智慧健康医疗项目</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>参与 JavaSE 停车场管理系统</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>参与鸿蒙版淘宝前端等实战项目</span>
          </div>
          <div class="skill-item">
            <span class="text-primary text-lg">•</span>
            <span>熟悉前后端交互流程</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 专业技能页面
</script>

<style scoped>
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-2 {
  gap: 0.5rem;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-gray-800 {
  color: #1e293b;
}

.text-xl {
  font-size: 1.25rem;
}

.text-lg {
  font-size: 1.125rem;
}

.font-semibold {
  font-weight: 600;
}

.text-primary {
  color: var(--primary-color);
}
</style>