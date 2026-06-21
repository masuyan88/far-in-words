"use client";

import { Scene } from "@/data/places";
import PlaceImage from "./PlaceImage";
import SceneImage from "./SceneImage";

interface SceneDetailModalProps {
  scene: Scene;
  onClose: () => void;
  onRandomNext: () => void;
}

export default function SceneDetailModal({
  scene,
  onClose,
  onRandomNext,
}: SceneDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center safe-bottom modal-backdrop" onClick={onClose}>
      <div
        className="relative w-full max-w-lg h-[85svh] sm:h-[85vh] flex flex-col modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 — 固定在图片右上 */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center text-[#6b5a45] hover:text-[#2b2118] transition-colors touch-manipulation rounded-full hover:bg-[#2b2118]/[0.06]"
          aria-label="关闭"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        </button>

        {/* 图片 — 固定，不滚动 */}
        <div className="shrink-0">
          {scene.image ? (
            <SceneImage src={scene.image.src} alt={scene.image.alt} />
          ) : (
            <PlaceImage placeId={scene.placeId} placeName={scene.placeName} />
          )}
        </div>

        {/* 正文 — 可滚动区域 */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 md:p-7 scrollbar-vintage">
          <div className="mb-5">
            <h2 className="text-lg md:text-xl font-bold text-[#2b2118] leading-snug">
              {scene.placeName} · {scene.name}
            </h2>
            <p className="text-[12px] text-[#6b5a45] mt-1 font-medium">来自：{scene.source}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-[11px] tracking-wider text-[#6b5a45] uppercase mb-2 font-semibold">这里发生了什么</h3>
            <p className="text-[#3f3326] text-[15px] md:text-base leading-[1.75]">{scene.summary}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-[11px] tracking-wider text-[#6b5a45] uppercase mb-2 font-semibold">情绪关键词</h3>
            <div className="flex flex-wrap gap-1.5">
              {scene.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-[11px] tracking-wider text-[#6b5a45] uppercase mb-2 font-semibold">这一站的回声</h3>
            <p className="text-[#3f3326] text-[15px] md:text-base leading-[1.75] italic">
              &ldquo;{scene.arrivalLine}&rdquo;
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[11px] tracking-wider text-[#6b5a45] uppercase mb-2 font-semibold">适合谁停一停</h3>
            <p className="text-[#3f3326] text-[15px] md:text-base leading-[1.75]">{scene.suitableFor}</p>
          </div>
        </div>

        {/* 按钮 — 固定在底部 */}
        <div className="shrink-0 px-5 md:px-7 py-4 border-t border-[#2b2118]/10 bg-[#f5efe2]">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button type="button" onClick={onClose} className="btn-ghost flex-1 text-[13px] font-medium min-h-[40px]">
              关闭
            </button>
            <button type="button" onClick={onRandomNext} className="btn-ink flex-1 text-sm font-medium min-h-[40px] !py-2.5 !px-4">
              随机抵达一站
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
