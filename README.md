<div align="center">

# CURN.ME // DIGITAL VESSEL

**极简通信坐标与思想锚点单页**<br>
*A quiet vessel for thought and contact.*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111111)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-See%20LICENSE-555555?style=for-the-badge)](LICENSE)

</div>

---

## 01. THE PURPOSE // 项目本源

mail 是一个纯前端静态页面，将意象首屏、可复制的通信地址和终章文字组织为三个纵向章节。它不包含后端、数据库或表单服务。

[Repository](https://github.com/kerntau/mail)

## 02. CORE ARCHITECTURE // 页面架构

~~~mermaid
graph TD
  App[React App] --> G[Genesis section]
  App --> A[Address section]
  App --> P[Philosophy section]
  A --> T[Copy toast]
~~~

## 03. TECHNICAL MATRIX // 技术矩阵

| 层 | 技术 | 用途 |
| --- | --- | --- |
| UI | React 19 + TypeScript | 组件和交互 |
| Build | Vite 6 | 开发与静态打包 |
| Style | Tailwind CSS 3 | 纸张纹理、排版和响应式 |
| Motion | Framer Motion | 入场与过渡动画 |
| Icons | Lucide React | 图标 |

## 04. REPOSITORY TOPOLOGY // 源码拓扑

~~~text
src/App.tsx              # 页面编排和滚动锚点
src/components/          # Genesis、Address、Philosophy、Toast
src/index.css            # Tailwind 与全局样式
public/                  # favicon 与静态资源
index.html               # 元数据和字体引用
~~~

## 05. CLONE & QUICK START // 极速开始

需要 Node.js 18+。

~~~bash
git clone https://github.com/kerntau/mail.git
cd mail
npm install
npm run dev
~~~

## 06. DEPLOYMENT & VERIFICATION // 部署与验证

运行 npm run build 生成静态产物，再部署到任意静态托管。发布前检查移动端滚动、复制按钮、字体加载和无 JavaScript 降级表现。

## 07. ENGINEERING CONTRACT // 工程契约

- 页面文案和通信地址不得意外提交敏感信息。
- 组件保持纯前端，不引入未使用的后端依赖。
- 动画需尊重 prefers-reduced-motion。
- 修改 Tailwind 配置后必须验证生产构建。

## 08. ROADMAP // 演进路线

- [x] 三章节沉浸式单页
- [x] 地址复制反馈和响应式布局
- [ ] 可选的可访问性高对比模式
- [ ] 更完整的静态部署示例

## 09. LICENSE // 许可证

以仓库中的 LICENSE 文件为准。
