"use client";

import { Scene } from "@/data/places";
import SceneImage from "./SceneImage";

interface SceneCardProps {
  scene: Scene;
  onViewDetail: (scene: Scene) => void;
}

export default function SceneCard({ scene, onViewDetail }: SceneCardProps) {
  return (
    <div className="card flex flex-col overflow-hidden">
      {scene.image && (
        <SceneImage src={scene.image.src} alt={scene.image.alt} />
      )}

      <div className="px-4 pt-3.5 pb-2 flex-1 flex flex-col">
        <p className="text-[11px] text-[#6b5a45] mb-0.5 tracking-wider font-medium">{scene.placeName}</p>
        <h3 className="text-[15px] md:text-base font-bold text-[#2b2118] mb-2">{scene.name}</h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {scene.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <p className="text-[#3f3326] text-sm md:text-[15px] leading-[1.75] italic flex-1">
          &ldquo;{scene.arrivalLine}&rdquo;
        </p>
      </div>

      <div className="px-4 pb-4 pt-1 relative z-10">
        <button
          type="button"
          onClick={() => {
            console.log("[click scene]", scene.id);
            onViewDetail(scene);
          }}
          className="btn-ghost w-full text-[13px] font-medium"
        >
          查看这一站
        </button>
      </div>
    </div>
  );
}
