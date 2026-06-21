# TODO.md — 当前任务清单

## 本次迭代目标

使用真实地点氛围图作为主要视觉素材，替换复杂的 SVG 代码插画。

---

## 已完成

- [x] 创建项目规则文档（CLAUDE.md, PRODUCT_SPEC.md, UI_GUIDE.md, MAP_GUIDE.md, IMAGE_GUIDE.md, DATA_GUIDE.md）
- [x] 全站文字可读性增强（色值加深、行高 1.75）
- [x] SVG 世界地图移动端重构（芯片列表 + 隐藏标签）
- [x] 移动端间距压缩、Safari 适配
- [x] 创建 PlaceImage 组件（真实图片 + 简洁占位降级）
- [x] 替换所有组件的图片引用到 PlaceImage
- [x] 保留 VintagePlaceIllustration.tsx 文件（不再使用，后续可删除）

---

## 待完成

### 1. 准备真实图片
- [ ] 用户自行将 6 张图片放入 /public/images/places/
  - mexico-city.jpg
  - honduras.jpg
  - panama.jpg
  - colombia.jpg
  - peru.jpg
  - dunhuang.jpg

### 2. 图片展示验证
- [ ] PlacePanel 展示大图（16:9）
- [ ] SceneCard 顶部横幅图（3:1）
- [ ] SceneDetailModal 展示图（16:9）
- [ ] RandomSceneModal 展示图（16:9）

---

## 不做的

- 不新增功能
- 不新增后端、数据库、AI 接口
- 不新增地图 SDK
- 不改变现有交互逻辑
