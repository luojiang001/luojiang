# 个人网站项目

这是一个基于 Vue3 + Vite 构建的个人网站项目，适配 GitHub Pages 静态部署。

## 技术栈
- Vue 3
- Vite
- Vue Router
- Tailwind CSS

## 项目结构
```
src/
├── components/       # 公共组件
├── views/            # 页面组件
├── router/           # 路由配置
├── assets/           # 静态资源
│   ├── images/       # 图片资源
│   └── styles/       # 样式文件
├── App.vue           # 根组件
└── main.ts           # 入口文件
```

## 本地运行
1. 安装依赖
   ```bash
   npm install
   ```

2. 启动开发服务器
   ```bash
   npm run dev
   ```

3. 构建项目
   ```bash
   npm run build
   ```

4. 预览构建结果
   ```bash
   npm run preview
   ```

## GitHub Pages 部署
1. 构建项目
   ```bash
   npm run build
   ```

2. 配置修改
   - 修改 `vite.config.ts` 文件中的 `base` 路径，替换为实际仓库名
     ```typescript
     // 例如：仓库名为 myinfo
     base: '/myinfo/',
     ```

3. 部署到 GitHub Pages
   - 方法一：使用 GitHub Actions 自动部署
     1. 在仓库中创建 `.github/workflows/deploy.yml` 文件
     2. 配置 workflow 自动构建和部署

   - 方法二：手动部署
     1. 将 `dist` 目录推送到 GitHub 仓库的 `gh-pages` 分支
     2. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

## 静态资源替换
- 头像：将图片放置在 `src/assets/images/avatar.jpg`
- 微信二维码：将图片放置在 `src/assets/images/wechat.png`
- QQ 二维码：将图片放置在 `src/assets/images/qq.png`

## 注意事项
- 路由使用 hash 模式，避免 GitHub Pages 刷新 404 问题
- 所有静态资源使用相对路径，确保部署后能正常加载
- 打包后体积轻量化，适配 GitHub Pages 静态部署要求

## 页面说明
1. **首页**：简约欢迎页，包含个人姓名、一句话简介，搭配轻量科技风动效
2. **关于我**：展示个人基本信息、教育经历，左文右图布局
3. **专业技能**：按「后端开发」「前端开发」「项目实践」分类展示技能点
4. **项目经历**：卡片式布局展示项目，包含项目名称、技术栈、项目介绍等
5. **联系方式**：展示邮箱、手机号，搭配微信/QQ/GitHub 图标和二维码