# IMAGE_GUIDE.md — 图片使用规则

## 核心原则

为每个大地点提供一张静态地点氛围图。图片**不是**三毛当年旅途影像，**不是**历史复原，**不是**真实照片。

## 图片路径

真实图片统一放在：

```
/public/images/places/
  mexico-city.jpg
  honduras.jpg
  panama.jpg
  colombia.jpg
  peru.jpg
  dunhuang.jpg
```

## Place 类型中的 image 字段

```ts
image: {
  src: string;      // 图片路径，如 "/images/places/mexico-city.jpg"
  alt: string;      // 无障碍描述
  caption: string;  // 统一说明
}
```

caption 统一值：
"地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。"

## 图片展示组件

使用统一的 `VintagePlaceIllustration` 组件展示地点图片。

### 组件逻辑

```
if 真实图片文件存在:
  展示 <img> 加载真实图片
else:
  展示内置 SVG/CSS 复古占位图
```

### 占位图要求

- 纯 CSS/SVG 实现，不依赖外部资源
- 根据 place.id 展示不同视觉图案
- 风格统一：旧纸背景 + 抽象插画 + 邮戳
- 6 个地点的占位图方向见下方

| place.id | 主题 | 视觉元素 |
|----------|------|---------|
| mexico-city | 城市街头 | 房屋剪影、街道线条、暖色块 |
| honduras | 中美洲路途 | 山地、植物线条、弯曲小路 |
| panama | 运河与水路 | 水道、船只剪影、桥/港口 |
| colombia | 山城街头 | 街道、房屋、山形背景 |
| peru | 高原遗迹 | 安第斯山、石墙/遗迹轮廓、太阳纹 |
| dunhuang | 沙漠石窟 | 沙丘、风沙线条、洞窟门形 |

## 图片展示位置

| 组件 | 展示方式 |
|------|---------|
| PlacePanel | 顶部展示当前地点大图 |
| SceneCard | 顶部展示所属地点图片（小图） |
| SceneDetailModal | 顶部展示所属地点图片 |
| RandomSceneModal | 顶部展示所属地点图片 |

## 图片风格处理

- 使用低饱和、暖色调
- 可以加复古滤镜（CSS filter）
- 但不能太淡，必须看得清
- opacity 不低于 0.85

## 禁止事项

- 不接 AI 图片生成接口
- 不接图片搜索接口
- 不使用远程图片 URL
- 不使用真实照片（在有占位图的情况下）
- 不声称是三毛当年影像
