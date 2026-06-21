# CLAUDE.md

## 项目信息

- **项目名称**: 文字里的远方
- **项目副标题**: 三毛《万水千山走遍》文学场景地图
- **项目定位**: 基于三毛《万水千山走遍》的文学场景地图。不是旅游攻略、不是百科、不是旅行手账。核心是"文学地图"。
- **技术栈**: Next.js 16 + TypeScript + Tailwind CSS v4 + 本地数据

## 核心约束（不可违反）

### 禁止使用的技术
- 不使用真实地图 SDK（Mapbox、Google Maps、高德、百度等）
- 不使用 Leaflet
- 不接后端、不接数据库
- 不接 AI 接口
- 不做登录、收藏、评论、搜索、后台管理

### 禁止的内容方向
- 不做旅游攻略（不写门票、路线、交通、住宿）
- 不做百科词条
- 不大量引用原文
- 不冒充三毛说话
- 不声称图片是三毛当年旅途影像

### UI 风格约束
- "旧纸感、明信片、旅行手账"只是 UI 风格，不是产品名称
- 文字必须清楚可读，不能为了旧纸感而太淡
- 主文字使用深棕或墨灰
- 避免使用亮蓝、纯白、强渐变、荧光色

## 项目结构

```
far-in-words/
├── src/
│   ├── app/
│   │   ├── globals.css          # 全局样式、CSS 变量、工具类
│   │   ├── layout.tsx           # 根布局、元数据
│   │   └── page.tsx             # 主页面、状态管理
│   ├── components/
│   │   ├── HeroSection.tsx      # 首页首屏
│   │   ├── LiteraryWorldMap.tsx # SVG 复古世界地图
│   │   ├── PlacePanel.tsx       # 地点信息区
│   │   ├── SceneGrid.tsx        # 小场景卡片网格
│   │   ├── SceneCard.tsx        # 单张场景卡片
│   │   ├── SceneDetailModal.tsx # 场景详情弹窗
│   │   ├── RandomSceneModal.tsx # 随机明信片弹窗
│   │   ├── AboutSection.tsx     # 关于区域
│   │   └── VintagePlaceIllustration.tsx # 地点氛围占位图组件
│   └── data/
│       └── places.ts            # 地点与场景数据
├── public/
│   └── images/places/           # 地点真实图片（可选）
└── docs/                        # 项目文档
```

## 颜色系统

| 用途 | 变量名 | 色值 |
|------|--------|------|
| 页面背景 | --background | #f3ece0 |
| 卡片背景 | --paper | #efe6d4 |
| 主文字 | --ink | #2e2318 |
| 辅助文字 | --ink-medium | #5a4a3c |
| 弱文字 | --ink-light | #6b5c4e |
| 强调/选中 | --accent | #7a1f00 |
| 地点标记 | --olive | #4a5e28 |
| 大陆块 | --continent | #d4c4a0 |

## 运行方式

```bash
npm run dev
# 打开 http://localhost:3000
```
