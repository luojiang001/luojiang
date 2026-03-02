<template>
  <div class="container">
    <h2 class="section-title">项目经历</h2>
    <div class="space-y-6">
      <!-- 健康医疗项目 -->
      <div class="card project-card">
        <h3 class="text-xl font-semibold mb-3 text-gray-800">基于 SpringBoot 的健康医疗项目</h3>
        <p class="text-gray-500 mb-4">2026/02</p>
        
        <!-- 技术栈标签 -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="tag">Java</span>
          <span class="tag">SpringBoot 3.x</span>
          <span class="tag">MyBatisPlus</span>
          <span class="tag">Redis</span>
          <span class="tag">RabbitMQ</span>
          <span class="tag">ElasticSearch</span>
          <span class="tag">Vue3</span>
          <span class="tag">TypeScript</span>
          <span class="tag">HarmonyOS NEXT</span>
          <span class="tag">ArkTS</span>
          <span class="tag">MySQL</span>
        </div>
        
        <!-- 项目介绍 -->
        <div class="mb-4">
          <h4 class="font-medium mb-2 text-gray-700">项目介绍</h4>
          <p class="text-gray-600">
            企业级前后端分离架构的多端适配智慧医疗系统，覆盖管理员、患者、医生三类角色，实现在线挂号、AI 智能问诊、医患沟通、药品购买、电子处方、科室 / 医生管理等核心功能，支持 Web 端 + 鸿蒙移动端双端使用。
          </p>
        </div>
        
        <!-- 核心内容 -->
        <div class="mb-4">
          <h4 class="font-medium mb-2 text-gray-700">核心内容</h4>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-primary">①</span>
              <span>SpringBoot+MyBatis 搭建分层架构，JWT 身份认证，权限控制与敏感数据加密</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">②</span>
              <span>Redis 缓存热点数据、RabbitMQ 处理异步消息、ElasticSearch 实现医疗信息检索</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">③</span>
              <span>Vue3+TypeScript 开发 Web 端，封装公共组件与 axios 请求工具，路由守卫与状态管理</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">④</span>
              <span>MySQL 数据库表结构设计，挂号号源控制、药品库存扣减的原子性操作</span>
            </li>
          </ul>
        </div>
        
        <!-- 项目难点与解决 -->
        <div>
          <h4 class="font-medium mb-2 text-gray-700">项目难点与解决</h4>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>多中间件数据一致性，缓存懒加载 + 过期策略、MQ 消息确认机制实现 ES 与数据库同步</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>Web / 鸿蒙移动端 API 统一调用，适配中老年用户操作习惯</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <span>高并发优化，缓存 + 异步处理解决挂号 / 购药系统延迟</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 项目经历页面
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-start {
  align-items: flex-start;
}

.gap-2 {
  gap: 0.5rem;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-gray-500 {
  color: #64748b;
}

.text-gray-600 {
  color: #475569;
}

.text-gray-700 {
  color: #334155;
}

.text-gray-800 {
  color: #1e293b;
}

.text-xl {
  font-size: 1.25rem;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.text-primary {
  color: var(--primary-color);
}
</style>