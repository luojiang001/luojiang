<template>
  <div class="container">
    <h2 class="section-title">关于我</h2>
    <div class="flex flex-row gap-8 items-center">
      <div class="md:w-1/2">
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-3 text-gray-800">个人信息</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span>
                <span><strong>姓名：</strong>赵佳旭</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span>
                <span><strong>出生年月：</strong>2005/02</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span>
                <span><strong>院校：</strong>唐山学院</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span>
                <span><strong>专业：</strong>计算机科学与技术本科</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span>
                <span><strong>在校时间：</strong>2023/09-2027/06</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">•</span>
                <span><strong>身份：</strong>在校本科生</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3 text-gray-800">主修课程</h3>
            <div class="flex flex-wrap gap-2">
              <span class="tag">数据结构</span>
              <span class="tag">算法设计</span>
              <span class="tag">操作系统</span>
              <span class="tag">计算机网络</span>
              <span class="tag">Web 开发技术</span>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <!-- 使用实际的头像图片 -->
        <img src="../assets/images/avatar.jpg" alt="赵佳旭" class="avatar">
      </div>
    </div>
  </div>
</template>

<script setup>
// 关于我页面
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-8 {
  gap: 2rem;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.text-center {
  text-align: center;
}

.text-gray-500 {
  color: #64748b;
}

.text-gray-600 {
  color: #475569;
}

.text-gray-800 {
  color: #1e293b;
}

.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.text-primary {
  color: var(--primary-color);
}

.md\:w-1\/2 {
  width: 50%;
}

@media (max-width: 768px) {
  .flex-row {
    flex-direction: column;
  }
  
  .md\:w-1\/2 {
    width: 100%;
  }
}
</style>