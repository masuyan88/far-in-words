"use client";

import { Scene } from "@/data/places";
import SceneCard from "./SceneCard";

interface SceneGridProps {
  scenes: Scene[];
  onViewDetail: (scene: Scene) => void;
}

export default function SceneGrid({ scenes, onViewDetail }: SceneGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5">
      {scenes.map((scene) => (
        <SceneCard key={scene.id} scene={scene} onViewDetail={onViewDetail} />
      ))}
    </div>
  );
}
