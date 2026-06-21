# DATA_GUIDE.md — 数据规范

## 数据文件

所有数据在 `/src/data/places.ts` 中，为一个静态 TypeScript 文件。

## 类型定义

```ts
export type Scene = {
  id: string;           // 唯一 ID，如 "mexico-city-night-one"
  name: string;         // 小场景名，如 "第一夜"
  placeId: string;      // 所属大地点 ID，如 "mexico-city"
  placeName: string;    // 所属大地点名，如 "墨西哥城"
  source: string;       // 固定为 "《万水千山走遍》"
  tags: string[];       // 2-4 个情绪/主题关键词
  summary: string;      // 2-3 句话概括
  arrivalLine: string;  // 一句文学抵达感文案
  suitableFor: string;  // 适合什么心情的人
};

export type Place = {
  id: string;           // 唯一 ID，如 "mexico-city"
  name: string;         // 地点英文名
  displayName: string;  // 显示名，如 "墨西哥城"
  countryOrRegion: string; // 国家/地区
  tags: string[];       // 3-5 个关键词
  summary: string;      // 地点简介
  mapPosition: {        // SVG 地图上的百分比坐标
    x: number;          // 0-100，从左到右
    y: number;          // 0-100，从上到下
  };
  scenes: Scene[];      // 该地点的所有小场景
  image: {              // 氛围图
    src: string;        // jpg 路径
    alt: string;
    caption: string;
  };
};
```

## 第一版数据

### 地点（6 个）

| id | displayName | countryOrRegion | mapPosition | 场景数 |
|----|-------------|-----------------|-------------|--------|
| mexico-city | 墨西哥城 | 墨西哥 | x:22, y:46 | 7 |
| honduras | 洪都拉斯 | 洪都拉斯 | x:26, y:52 | 3 |
| panama | 巴拿马 | 巴拿马 | x:30, y:58 | 3 |
| colombia | 哥伦比亚 | 哥伦比亚 | x:33, y:62 | 3 |
| peru | 秘鲁 | 秘鲁 | x:35, y:72 | 4 |
| dunhuang | 敦煌 | 中国 | x:76, y:45 | 3 |

### 场景（23 个）

每个地点 3-7 个小场景，总计 23 个。

## 文案规则

- summary 为概括性表达，2-3 句话
- arrivalLine 为文学感抵达文案，一句话
- suitableFor 为心情适配说明
- 不要大量引用原文
- 不要冒充三毛说话
- 不要出现"我是三毛"
- 不要写旅游攻略（门票、路线、交通、住宿）

## 扩展数据

后续添加新地点时：
1. 在 places 数组中添加新 Place
2. 填充 scenes 数组
3. 设置合理的 mapPosition（百分比坐标）
4. 如果要精确坐标，在 MAP_GUIDE.md 中校准
5. 添加对应的 image 字段
6. 准备 /public/images/places/ 下的图片（可选）
