"use client";

import { Scene } from "@/data/places";
import PlaceImage from "./PlaceImage";
import SceneImage from "./SceneImage";

type RandomScope = { mode: "global" } | { mode: "place"; placeId: string };

interface RandomSceneModalProps {
  scene: Scene;
  scope: RandomScope;
  onClose: () => void;
  onReroll: () => void;
  onViewFull: () => void;
}

export default function RandomSceneModal({
  scene,
  scope,
  onClose,
  onReroll,
  onViewFull,
}: RandomSceneModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center safe-bottom modal-backdrop" onClick={onClose}>
      <div
        className="relative w-full max-w-md h-[85svh] sm:h-[85vh] flex flex-col overflow-hidden modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center text-[#6b5a45] hover:text-[#2b2118] transition-colors touch-manipulation rounded-full hover:bg-[#2b2118]/[0.06]"
          aria-label="关闭"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        </button>

        {/* 图片 — 固定 */}
        <div className="shrink-0">
          {scene.image ? (
            <SceneImage src={scene.image.src} alt={scene.image.alt} />
          ) : (
            <PlaceImage placeId={scene.placeId} placeName={scene.placeName} />
          )}
        </div>

        {/* 正文 — 可滚动 */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 md:p-7 text-center scrollbar-vintage">
          <div className="inline-block mb-3 px-4 py-1.5 border-[1.5px] border-[#7a1f00]/40 rounded-full -rotate-2 opacity-80">
            <span className="text-[11px] text-[#7a1f00] tracking-[0.15em] font-semibold">POSTCARD FROM AFAR</span>
          </div>

          <p className="text-[#6b5a45] text-[13px] md:text-sm mb-3 tracking-wider font-medium">
            你今天收到一张远方明信片
          </p>

          <h2 className="text-lg md:text-xl font-bold text-[#2b2118] mb-3">
            {scene.placeName} · {scene.name}
          </h2>

          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {scene.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <p className="text-[#3f3326] text-[15px] md:text-base leading-[1.75] italic mb-4">
            &ldquo;{scene.arrivalLine}&rdquo;
          </p>

          <p className="text-[#6b5a45] text-sm md:text-[15px] leading-[1.75]">
            {scene.suitableFor}
          </p>
        </div>

        {/* 按钮 — 固定底部 */}
        <div className="shrink-0 px-5 md:px-7 py-4 border-t border-[#2b2118]/10 bg-[#f5efe2]">
          <div className="flex flex-col gap-2.5">
            <button type="button" onClick={onViewFull} className="btn-ink w-full text-sm font-medium min-h-[44px]">
              查看完整场景
            </button>
            <div className="flex gap-2.5">
              <button type="button" onClick={onReroll} className="btn-ghost flex-1 text-[13px] font-medium">
                {scope.mode === "place" ? `再抵达${scene.placeName}一站` : "再随机一站"}
              </button>
              <button type="button" onClick={onClose} className="btn-ghost flex-1 text-[13px] font-medium">
                关闭
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
