<template>
  <div class="container">
    <h2 class="section-title">联系方式</h2>
    <div class="flex flex-row gap-8">
      <div class="md:w-1/2">
        <div class="space-y-4">
          <div class="contact-item">
            <span class="text-primary text-2xl">📧</span>
            <div>
              <h3 class="font-medium text-gray-800">邮箱</h3>
              <p class="text-gray-600 clickable" @click="copyToClipboard('2395693209@qq.com')">
                2395693209@qq.com
              </p>
            </div>
          </div>
          <div class="contact-item">
            <span class="text-primary text-2xl">📱</span>
            <div>
              <h3 class="font-medium text-gray-800">电话</h3>
              <p class="text-gray-600 clickable" @click="copyToClipboard('15830933209')">
                15830933209
              </p>
            </div>
          </div>
          <div class="contact-item">
            <span class="text-primary text-2xl">💬</span>
            <div>
              <h3 class="font-medium text-gray-800">微信</h3>
              <p class="text-gray-600">扫码添加</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="text-primary text-2xl">👥</span>
            <div>
              <h3 class="font-medium text-gray-800">QQ</h3>
              <p class="text-gray-600">2395693209</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="text-primary text-2xl">🐱</span>
            <div>
              <h3 class="font-medium text-gray-800">GitHub</h3>
              <p class="text-gray-600">github.com/username</p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <!-- 使用实际的二维码图片 -->
        <div class="space-y-6">
          <div class="card text-center">
            <h3 class="font-medium mb-3 text-gray-800">微信二维码</h3>
            <img src="../assets/images/wechat.png" alt="微信二维码" class="qr-code">
          </div>
          <div class="card text-center">
            <h3 class="font-medium mb-3 text-gray-800">QQ 二维码</h3>
            <img src="../assets/images/qq.png" alt="QQ 二维码" class="qr-code">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 复制到剪贴板
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('复制成功！');
  });
};
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.items-center {
  align-items: center;
}

.gap-8 {
  gap: 2rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
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

.text-2xl {
  font-size: 1.5rem;
}

.font-medium {
  font-weight: 500;
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