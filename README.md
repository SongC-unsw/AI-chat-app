# DeepSeek AI Chat Application

一个基于 DeepSeek 的智能对话应用，提供流畅的 AI 聊天体验，支持多种模型和会话管理。

## ✨ 主要功能

- 🤖 **AI 对话**: 集成 DeepSeek AI 模型，支持实时流式响应
- 🧠 **多模型支持**:
  - DeepSeek V3: 标准对话模型
  - DeepSeek R1: 深度思考推理模型
- 👤 **用户认证**: 基于 Clerk 的完整用户管理系统
- 💾 **会话存储**: 永久保存对话历史，支持多会话管理
- 📱 **响应式设计**: 现代化 UI，适配桌面和移动设备
- 📝 **Markdown 支持**: 完整的 Markdown 渲染，支持代码高亮
- 🔄 **实时同步**: 使用 React Query 进行状态管理和数据同步

## 🛠️ 技术栈

### 前端

- **Next.js 15**: 使用 App Router 和 Turbopack
- **React 19**: 最新版本的 React
- **TypeScript**: 类型安全的开发体验
- **Tailwind CSS**: 现代化的 CSS 框架
- **Lucide React**: 精美的图标库

### 后端

- **Next.js API Routes**: 服务端 API 接口
- **PostgreSQL**: 可靠的关系型数据库
- **Drizzle ORM**: 轻量级的 TypeScript ORM

### AI 集成

- **阿里云百炼**: LLM API 接口
- **AI SDK**: 流式响应和聊天管理
- **React Markdown**: Markdown 内容渲染

### 其他工具

- **Clerk**: 用户认证和管理
- **React Query**: 服务端状态管理
- **Axios**: HTTP 请求库

## 📝 API 接口

### 主要端点

- `POST /api/chat` - AI 对话接口
- `POST /api/create-chat` - 创建新会话
- `POST /api/get-chat` - 获取会话详情
- `POST /api/get-chats` - 获取用户会话列表
- `POST /api/get-messages` - 获取会话消息

## 🔐 安全性

- 使用 Clerk 进行用户认证
- API 路由包含用户权限验证
- 数据库操作使用参数化查询
- 环境变量安全存储

## 📱 部署

> Vercel 部署前端，Supabase 后端
