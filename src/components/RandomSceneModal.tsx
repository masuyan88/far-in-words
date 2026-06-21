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
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 safe-bottom modal-backdrop" onClick={onClose}>
      <div className="relative w-full max-w-md max-h-[85svh] sm:max-h-[85vh] overflow-y-auto modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-[#6b5a45] hover:text-[#2b2118] transition-colors touch-manipulation rounded-full hover:bg-[#2b2118]/[0.06]"
          aria-label="关闭"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        </button>

        {scene.image ? (
          <SceneImage src={scene.image.src} alt={scene.image.alt} />
        ) : (
          <PlaceImage placeId={scene.placeId} placeName={scene.placeName} />
        )}

        <div className="p-5 md:p-7 text-center">
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

          <p className="text-[#6b5a45] text-sm md:text-[15px] leading-[1.75] mb-5">
            {scene.suitableFor}
          </p>

          <div className="h-px bg-[#2b2118]/10 mb-5" />

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
