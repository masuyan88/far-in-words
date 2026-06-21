"use client";

import { Scene } from "@/data/places";

interface HeroSectionProps {
  onStartTravel: () => void;
  onRandomScene: () => void;
  randomScene: Scene | null;
}

export default function HeroSection({
  onStartTravel,
  onRandomScene,
}: HeroSectionProps) {
  return (
    <section className="relative flex items-center justify-center px-5" style={{ minHeight: 560, background: "#f3ece0" }}>
      {/* faint grid watermark */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="200" x2="1200" y2="200" stroke="#2b2118" strokeWidth="0.5" />
        <line x1="0" y1="400" x2="1200" y2="400" stroke="#2b2118" strokeWidth="0.5" />
        <line x1="0" y1="600" x2="1200" y2="600" stroke="#2b2118" strokeWidth="0.5" />
        <line x1="300" y1="0" x2="300" y2="800" stroke="#2b2118" strokeWidth="0.5" />
        <line x1="600" y1="0" x2="600" y2="800" stroke="#2b2118" strokeWidth="0.5" />
        <line x1="900" y1="0" x2="900" y2="800" stroke="#2b2118" strokeWidth="0.5" />
        <path d="M0,150 Q600,100 1200,150" fill="none" stroke="#2b2118" strokeWidth="0.3" />
        <path d="M0,350 Q600,300 1200,350" fill="none" stroke="#2b2118" strokeWidth="0.3" />
        <path d="M0,550 Q600,500 1200,550" fill="none" stroke="#2b2118" strokeWidth="0.3" />
      </svg>

      <div className="relative z-10 text-center max-w-2xl mx-auto py-16 md:py-28">
        <p className="text-[#6b5a45] text-xs md:text-sm tracking-[0.2em] mb-4 md:mb-6 uppercase font-medium">
          三毛《万水千山走遍》文学场景地图
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2b2118] mb-2 md:mb-3 leading-[1.15] tracking-wide">
          文字里的远方
        </h1>

        <div className="flex items-center justify-center gap-2.5 mb-4 md:mb-6">
          <div className="w-8 h-px bg-[#2b2118]/20" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#2b2118]/25" />
          <div className="w-8 h-px bg-[#2b2118]/20" />
        </div>

        <p className="text-[#3f3326] text-base md:text-lg mb-1.5 leading-[1.75]">
          把书中的旅行地点，变成一张可以点击的文学地图。
        </p>
        <p className="text-[#6b5a45] text-sm md:text-base mb-8 md:mb-10 leading-[1.7]">
          这里不是旅游攻略，也不是百科。
          <br />
          只是从三毛的文字出发，重新抵达那些地方。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button type="button" onClick={onStartTravel} className="btn-ink">
            开始旅行
          </button>
          <button type="button" onClick={onRandomScene} className="btn-paper">
            随机抵达一站
          </button>
        </div>
      </div>
    </section>
  );
}
