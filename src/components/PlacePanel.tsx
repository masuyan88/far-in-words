"use client";

import { Place, Scene } from "@/data/places";
import PlaceImage from "./PlaceImage";

interface PlacePanelProps {
  place: Place;
  onSelectScene: (scene: Scene) => void;
  onRandomInPlace: () => void;
}

export default function PlacePanel({
  place,
  onSelectScene,
  onRandomInPlace,
}: PlacePanelProps) {
  return (
    <div className="card p-4 md:p-6">
      <div className="mb-4 md:mb-5">
        <PlaceImage placeId={place.id} placeName={place.displayName} />
      </div>

      <div className="flex flex-wrap items-center gap-2.5 mb-2">
        <h2 className="text-xl md:text-2xl font-bold text-[#2b2118]">{place.displayName}</h2>
        <span className="inline-block border-[1.5px] border-[#7a1f00] rounded-full px-2.5 py-0.5 text-[0.65rem] tracking-[0.08em] text-[#7a1f00] opacity-70 -rotate-[5deg]">
          {place.countryOrRegion}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {place.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <p className="text-[#3f3326] text-[15px] md:text-base leading-[1.75] mb-5">
        {place.summary}
      </p>

      <p className="text-[11px] text-[#6b5a45] mb-2 tracking-wider uppercase font-semibold">小场景</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {place.scenes.map((scene) => (
          <button
            key={scene.id}
            type="button"
            onClick={() => onSelectScene(scene)}
            className="btn-ghost text-[13px] font-medium"
          >
            {scene.name}
          </button>
        ))}
      </div>

      <button type="button" onClick={onRandomInPlace} className="btn-paper text-[13px] w-full">
        随机抵达{place.displayName}的一站
      </button>
    </div>
  );
}
