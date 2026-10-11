# curn.me — 数字容器

一个以“通信坐标”和“思想锚点”为主题的极简单页。页面由三个纵向章节组成：意象首屏、可复制的通信地址，以及终章文字回响。

## 技术栈

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3
- Framer Motion
- Lucide React

这是一个纯前端静态项目，不包含后端、数据库或表单提交服务。

## 本地开发

需要 Node.js 18+。

~~~bash
npm install
npm run dev
~~~

Vite 会输出本地开发地址。生产构建与预览：

~~~bash
npm run build
npm run preview
~~~

## 目录

- src/App.tsx：页面布局和章节编排
- src/components/：Genesis、Address、Philosophy 与 Toast 组件
- src/index.css：Tailwind 与全局样式
- public/：图标及静态资源
- index.html：页面元数据和字体引用

## 内容修改

通信地址和文案位于 src/components/ 对应章节中。修改后运行 npm run build，确认静态资源路径和移动端布局正常。

## 许可证

以仓库中的许可证文件为准。
