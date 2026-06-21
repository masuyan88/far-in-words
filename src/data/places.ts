export type Scene = {
  id: string;
  name: string;
  placeId: string;
  placeName: string;
  source: string;
  tags: string[];
  summary: string;
  arrivalLine: string;
  suitableFor: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export type Place = {
  id: string;
  name: string;
  displayName: string;
  countryOrRegion: string;
  tags: string[];
  summary: string;
  mapPosition: {
    x: number;
    y: number;
  };
  scenes: Scene[];
  image: {
    src: string;
    alt: string;
    caption: string;
  };
};

export const places: Place[] = [
  {
    id: "mexico-city",
    name: "墨西哥城",
    displayName: "墨西哥城",
    countryOrRegion: "墨西哥",
    tags: ["初抵达", "街头", "旅馆", "遗迹", "生活气"],
    summary:
      "这一站不是攻略里的墨西哥，而是三毛文字里那个陌生、热烈、让人不知所措的异乡。",
    mapPosition: { x: 22, y: 46 },
    scenes: [
      {
        id: "mexico-city-night-one",
        name: "第一夜",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["陌生", "初抵达", "不安", "自由"],
        summary:
          "三毛抵达墨西哥后的第一个夜晚，陌生的城市、旅馆和语言让远方不再只是想象，而变成真实的不安与兴奋。夜里听到街上的声音，一切都和过去不同了。",
        arrivalLine: "当飞机降落，远方终于不再是一个词。",
        suitableFor: "适合想重新开始，但心里还有点害怕的人。",
        image: {
          src: "/images/scenes/mexico-first-night.webp",
          alt: "第一夜场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "mexico-city-hotel",
        name: "旅馆",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["临时", "孤独", "安顿", "异乡"],
        summary:
          "住在墨西哥城的旅馆里，四面是陌生的墙壁和窗外听不懂的语言。旅馆是旅人暂时的壳，也是重新认识自己的地方。",
        arrivalLine: "每到一个新地方，先认认枕头的味道。",
        suitableFor: "适合在陌生环境里需要一点安定感的人。",
        image: {
          src: "/images/scenes/mexico-hotel.webp",
          alt: "旅馆场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "mexico-city-metro",
        name: "地铁街头",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["热闹", "人群", "观察", "生活气"],
        summary:
          "墨西哥城的地铁和街头充满人和声音。三毛在人群里看这座城市，看人们的表情和节奏，像一个安静的旁观者。",
        arrivalLine: "有时候，认识一座城市从挤进它的地铁开始。",
        suitableFor: "适合喜欢在人群中安静观察的人。",
        image: {
          src: "/images/scenes/mexico-subway-street.webp",
          alt: "地铁街头场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "mexico-city-museum",
        name: "博物馆",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["历史", "艺术", "沉默", "震撼"],
        summary:
          "在墨西哥城的博物馆里，三毛看到了古文明的痕迹。那些沉默的石头和颜色，把时间拉得又远又近。",
        arrivalLine: "有些东西停在玻璃柜里，但震动的是站在外面的人。",
        suitableFor: "适合想要安静下来、被某种大东西触动的人。",
        image: {
          src: "/images/scenes/mexico-museum.webp",
          alt: "博物馆场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "mexico-city-pyramid",
        name: "金字塔",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["遗迹", "辽阔", "古老", "敬畏"],
        summary:
          "离开城市去看金字塔。古老的石头在阳光下安静地存在，比人和时间都要沉得住气。三毛在这里感受到一种完全不同于日常的尺度。",
        arrivalLine: "有些东西不说话，但你知道它什么都见过。",
        suitableFor: "适合觉得日常太拥挤、想看看更大的东西的人。",
        image: {
          src: "/images/scenes/mexico-pyramids.webp",
          alt: "金字塔场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "mexico-city-taco",
        name: "塔哥",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["食物", "温暖", "日常", "异乡"],
        summary:
          "吃一个塔哥，是墨西哥城最日常的时刻。食物让人从旅途回到身体，也让陌生的地方有了一点温度。",
        arrivalLine: "到了一个地方，先尝尝它是什么味道的。",
        suitableFor: "适合想念简单温暖、想要一点人间烟火的人。",
        image: {
          src: "/images/scenes/mexico-taco.webp",
          alt: "塔哥场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "mexico-city-floating-garden",
        name: "水上花园",
        placeId: "mexico-city",
        placeName: "墨西哥城",
        source: "《万水千山走遍》",
        tags: ["水面", "色彩", "人群", "生活气"],
        summary:
          "墨西哥城的水上花园，人们在水上划船、卖东西、过日子。远处的颜色在水面上晃动，生活就这样热热闹闹地在水上进行。",
        arrivalLine: "远方有时候不是风景，而是别人正在过的日子。",
        suitableFor: "适合最近觉得生活有点干、想重新感受热闹的人。",
        image: {
          src: "/images/scenes/mexico-floating-gardens.webp",
          alt: "水上花园场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
    ],
    image: {
      src: "/images/places/mexico-city.jpg",
      alt: "墨西哥城地点氛围图",
      caption: "地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。",
    },
  },
  {
    id: "honduras",
    name: "洪都拉斯",
    displayName: "洪都拉斯",
    countryOrRegion: "洪都拉斯",
    tags: ["路途", "边境", "停留", "异乡"],
    summary:
      "这一站更像旅途中的过渡地带，有奔波、等待，也有对陌生世界的观察。",
    mapPosition: { x: 26, y: 52 },
    scenes: [
      {
        id: "honduras-road",
        name: "旅途路上",
        placeId: "honduras",
        placeName: "洪都拉斯",
        source: "《万水千山走遍》",
        tags: ["移动", "疲惫", "路途", "等待"],
        summary:
          "在洪都拉斯的路途上，车窗外是不断后退的风景。旅途不总是浪漫的，有时候就是一段长长的、沉默的移动。",
        arrivalLine: "在路上的时间，有时候比到达更长。",
        suitableFor: "适合正在经历某种过渡期、需要耐心的人。",
        image: {
          src: "/images/scenes/honduras-on-the-road.webp",
          alt: "洪都拉斯 · 旅途路上场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "honduras-border",
        name: "边境停留",
        placeId: "honduras",
        placeName: "洪都拉斯",
        source: "《万水千山走遍》",
        tags: ["等待", "边界", "不确定", "停留"],
        summary:
          "在边境停留，填写表格，等待放行。这里既不属于出发的地方，也不属于目的地，人就这样悬在两个世界之间。",
        arrivalLine: "有时候你哪里都不属于，但你还在那里。",
        suitableFor: "适合在人生某个中间地带等待的人。",
        image: {
          src: "/images/scenes/honduras-border-stop.webp",
          alt: "洪都拉斯 · 边境停留场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "honduras-observe",
        name: "异乡观察",
        placeId: "honduras",
        placeName: "洪都拉斯",
        source: "《万水千山走遍》",
        tags: ["观察", "陌生", "安静", "旁观"],
        summary:
          "在洪都拉斯短暂停留的日子里，三毛观察这个地方的人和生活。没有刻意寻找什么，只是安静地看。",
        arrivalLine: "有时候你不需要融入，看看就已经够了。",
        suitableFor: "适合想要在安静中观察世界的人。",
        image: {
          src: "/images/scenes/honduras-foreign-observation.webp",
          alt: "洪都拉斯 · 异乡观察场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
    ],
    image: {
      src: "/images/places/honduras.jpg",
      alt: "洪都拉斯地点氛围图",
      caption: "地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。",
    },
  },
  {
    id: "panama",
    name: "巴拿马",
    displayName: "巴拿马",
    countryOrRegion: "巴拿马",
    tags: ["运河", "城市", "过境", "旅人"],
    summary:
      "巴拿马像一处水路和人群交汇的地方，带着过境的流动感。",
    mapPosition: { x: 30, y: 58 },
    scenes: [
      {
        id: "panama-canal",
        name: "运河边",
        placeId: "panama",
        placeName: "巴拿马",
        source: "《万水千山走遍》",
        tags: ["运河", "流动", "壮观", "沉默"],
        summary:
          "站在巴拿马运河边，看巨大的船只缓缓通过。水从一个大洋流向另一个大洋，带着不属于任何地方的自由。",
        arrivalLine: "有些东西太大了，站在旁边你就安静了。",
        suitableFor: "适合想要感受某种宏大的、超越日常的尺度的人。",
        image: {
          src: "/images/scenes/panama-canal-side.webp",
          alt: "巴拿马 · 运河边场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "panama-city",
        name: "城市印象",
        placeId: "panama",
        placeName: "巴拿马",
        source: "《万水千山走遍》",
        tags: ["城市", "交汇", "杂乱", "真实"],
        summary:
          "巴拿马的城市有一种混合的气质。新旧交替，不同文化的人在这里交汇。这不是一个干净整洁的地方，但正是这种杂乱让它真实。",
        arrivalLine: "有些城市不漂亮，但活生生的。",
        suitableFor: "适合厌倦了精致包装、想看看真实世界的人。",
        image: {
          src: "/images/scenes/panama-city-impression.webp",
          alt: "巴拿马 · 城市印象场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "panama-traveler",
        name: "旅人状态",
        placeId: "panama",
        placeName: "巴拿马",
        source: "《万水千山走遍》",
        tags: ["旅人", "过境", "流动", "自由"],
        summary:
          "在巴拿马，三毛写到一种旅人才有的状态：不属于这里，但暂时在这里。不是游客，也不是居民，是一种悬浮在世界里的自由。",
        arrivalLine: "路过一个地方，有时候比住下来更自由。",
        suitableFor: "适合享受漂浮感、不急着落地的人。",
        image: {
          src: "/images/scenes/panama-traveler-state.webp",
          alt: "巴拿马 · 旅人状态场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
    ],
    image: {
      src: "/images/places/panama.jpg",
      alt: "巴拿马地点氛围图",
      caption: "地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。",
    },
  },
  {
    id: "colombia",
    name: "哥伦比亚",
    displayName: "哥伦比亚",
    countryOrRegion: "哥伦比亚",
    tags: ["街头", "不安", "人物", "观察"],
    summary:
      "这一站带着更强烈的现实感，有街头、人群，也有旅行中无法回避的不安。",
    mapPosition: { x: 33, y: 62 },
    scenes: [
      {
        id: "colombia-street",
        name: "城市街头",
        placeId: "colombia",
        placeName: "哥伦比亚",
        source: "《万水千山走遍》",
        tags: ["街头", "热闹", "混乱", "真实"],
        summary:
          "哥伦比亚的街头有声音、颜色和人流。不是那种为游客准备的热闹，是本地人日复一日过出来的那种热闹。",
        arrivalLine: "最好的街景不在明信片里，在有人正在过的那条路上。",
        suitableFor: "适合想要看看真实世界、不在意它是否整齐的人。",
        image: {
          src: "/images/scenes/colombia-city-street.webp",
          alt: "哥伦比亚 · 城市街头场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "colombia-stranger",
        name: "陌生人",
        placeId: "colombia",
        placeName: "哥伦比亚",
        source: "《万水千山走遍》",
        tags: ["人物", "相遇", "温暖", "短暂"],
        summary:
          "旅途中遇到的陌生人，有的说了一句话就走了，有的帮了一个忙就消失了。三毛在哥伦比亚遇到了一些这样的人。",
        arrivalLine: "有些人来了一下就走了，但你记得他一辈子。",
        suitableFor: "适合珍惜生命中那些短暂但真实相遇的人。",
        image: {
          src: "/images/scenes/colombia-stranger.webp",
          alt: "哥伦比亚 · 陌生人场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "colombia-unease",
        name: "不安时刻",
        placeId: "colombia",
        placeName: "哥伦比亚",
        source: "《万水千山走遍》",
        tags: ["不安", "危险", "真实", "清醒"],
        summary:
          "旅行不总是安心的。在哥伦比亚，三毛经历了一些让人不安的时刻。远方有它的美，也有它的锋利。",
        arrivalLine: "远方不全是温柔的，有时候它会划你一下。",
        suitableFor: "适合经历过不安、但依然觉得走一趟值得的人。",
        image: {
          src: "/images/scenes/colombia-anxious-moment.webp",
          alt: "哥伦比亚 · 不安时刻场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
    ],
    image: {
      src: "/images/places/colombia.jpg",
      alt: "哥伦比亚地点氛围图",
      caption: "地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。",
    },
  },
  {
    id: "peru",
    name: "秘鲁",
    displayName: "秘鲁",
    countryOrRegion: "秘鲁",
    tags: ["高原", "遗迹", "疲惫", "震撼"],
    summary:
      "秘鲁这一站有辽阔，也有身体的疲惫。远方在这里不是轻松的，而是沉重、古老、震撼的。",
    mapPosition: { x: 35, y: 72 },
    scenes: [
      {
        id: "peru-plateau",
        name: "高原路上",
        placeId: "peru",
        placeName: "秘鲁",
        source: "《万水千山走遍》",
        tags: ["高原", "辽阔", "呼吸", "沉默"],
        summary:
          "秘鲁的高原上，空气变得稀薄，景色变得辽阔。人在高原上会感到一种身体上的困难，但眼睛舍不得闭上。",
        arrivalLine: "有些地方，喘着气也想多看一眼。",
        suitableFor: "适合正在经历某种艰难、但不想放弃的人。",
        image: {
          src: "/images/scenes/peru-highland-road.webp",
          alt: "秘鲁 · 高原路上场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "peru-ruins",
        name: "遗迹之前",
        placeId: "peru",
        placeName: "秘鲁",
        source: "《万水千山走遍》",
        tags: ["古老", "遗迹", "时间", "渺小"],
        summary:
          "站在秘鲁的遗迹前，时间变得不再重要。石头比文字更沉默，但它们记录了比文字更长的历史。",
        arrivalLine: "站在遗迹前，你才发现自己有多小。",
        suitableFor: "适合想要暂时放下自我、感受时间重量的人。",
        image: {
          src: "/images/scenes/peru-before-ruins.webp",
          alt: "秘鲁 · 遗迹之前场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "peru-exhaustion",
        name: "身体疲惫",
        placeId: "peru",
        placeName: "秘鲁",
        source: "《万水千山走遍》",
        tags: ["疲惫", "身体", "坚持", "真实"],
        summary:
          "在秘鲁的高原上旅行，身体是诚实的。高反、寒冷、长途跋涉，远方的代价写在身体上。但三毛没有因此停下。",
        arrivalLine: "身体说不行了，脚还在往前走。",
        suitableFor: "适合身体很累但心里还有方向的人。",
        image: {
          src: "/images/scenes/peru-physical-fatigue.webp",
          alt: "秘鲁 · 身体疲惫场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "peru-civilization",
        name: "古老文明",
        placeId: "peru",
        placeName: "秘鲁",
        source: "《万水千山走遍》",
        tags: ["文明", "古老", "震撼", "沉默"],
        summary:
          "秘鲁留下的不只是风景，还有曾经在这里生活过的文明的痕迹。三毛在这里感受到一种跨越时间的联系。",
        arrivalLine: "有些文明走了，但它留下的东西还在说话。",
        suitableFor: "适合在某个安静的时刻，想和更大的存在连接的人。",
        image: {
          src: "/images/scenes/peru-ancient-civilization.webp",
          alt: "秘鲁 · 古老文明场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
    ],
    image: {
      src: "/images/places/peru.jpg",
      alt: "秘鲁地点氛围图",
      caption: "地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。",
    },
  },
  {
    id: "dunhuang",
    name: "敦煌",
    displayName: "敦煌",
    countryOrRegion: "中国",
    tags: ["沙漠", "莫高窟", "历史", "时间"],
    summary:
      "敦煌这一站像是从地理走进历史，风沙、石窟和时间感一起出现。",
    mapPosition: { x: 76, y: 45 },
    scenes: [
      {
        id: "dunhuang-mogao",
        name: "莫高窟",
        placeId: "dunhuang",
        placeName: "敦煌",
        source: "《万水千山走遍》",
        tags: ["石窟", "壁画", "历史", "震撼"],
        summary:
          "走进莫高窟，光线暗下来，壁画在墙上安静地存在了千年。三毛在这里感受到了一种深沉的、不需要解释的感动。",
        arrivalLine: "走进石窟的那一刻，外面的世界就停了。",
        suitableFor: "适合想要在安静中被某种深沉的力量触动的人。",
        image: {
          src: "/images/scenes/dunhuang-mogao-caves.webp",
          alt: "敦煌 · 莫高窟场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "dunhuang-desert",
        name: "沙漠路上",
        placeId: "dunhuang",
        placeName: "敦煌",
        source: "《万水千山走遍》",
        tags: ["沙漠", "辽阔", "孤独", "风沙"],
        summary:
          "去敦煌的路上经过大片沙漠。风沙扑面，天地之间只有你一个人。这不是温柔的远方，但它是真实的。",
        arrivalLine: "沙漠不会欢迎你，但它不会骗你。",
        suitableFor: "适合想要面对真正的孤独、不再逃避的人。",
        image: {
          src: "/images/scenes/dunhuang-desert-road.webp",
          alt: "敦煌 · 沙漠路上场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
      {
        id: "dunhuang-history",
        name: "历史之前",
        placeId: "dunhuang",
        placeName: "敦煌",
        source: "《万水千山走遍》",
        tags: ["时间", "历史", "渺小", "安静"],
        summary:
          "在敦煌，历史不是一个概念，而是风沙和石窟里留下来的痕迹。三毛在这里安静地站了很久，像和时间说了一些什么。",
        arrivalLine: "在历史面前，安静是最好的回应。",
        suitableFor: "适合在忙碌的生活中想要停下来、感受时间的人。",
        image: {
          src: "/images/scenes/dunhuang-before-history.webp",
          alt: "敦煌 · 历史之前场景氛围图",
          caption: "场景氛围图，仅用于辅助想象，并非三毛当年旅途影像或历史复原。",
        },
      },
    ],
    image: {
      src: "/images/places/dunhuang.jpg",
      alt: "敦煌地点氛围图",
      caption: "地点氛围图，仅用于辅助想象，并非三毛当年旅途影像。",
    },
  },
];
