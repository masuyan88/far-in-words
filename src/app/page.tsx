"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import { places, Scene } from "@/data/places";
import HeroSection from "@/components/HeroSection";
import LiteraryWorldMap from "@/components/LiteraryWorldMap";
import PlacePanel from "@/components/PlacePanel";
import SceneGrid from "@/components/SceneGrid";
import SceneDetailModal from "@/components/SceneDetailModal";
import RandomSceneModal from "@/components/RandomSceneModal";
import AboutSection from "@/components/AboutSection";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

type RandomScope = { mode: "global" } | { mode: "place"; placeId: string };

export default function Home() {
  const [selectedPlaceId, setSelectedPlaceId] = useState("mexico-city");
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [randomScene, setRandomScene] = useState<Scene | null>(null);
  const [showRandomModal, setShowRandomModal] = useState(false);
  const [randomScope, setRandomScope] = useState<RandomScope>({ mode: "global" });

  const mapRef = useRef<HTMLDivElement>(null);
  const allScenes = useMemo(() => places.flatMap((p) => p.scenes), []);
  const selectedPlace = useMemo(
    () => places.find((p) => p.id === selectedPlaceId) || places[0],
    [selectedPlaceId]
  );

  const getScenesForScope = useCallback(
    (scope: RandomScope): Scene[] => {
      if (scope.mode === "global") return allScenes;
      const place = places.find((p) => p.id === scope.placeId);
      return place ? place.scenes : allScenes;
    },
    [allScenes]
  );

  const openRandom = useCallback(
    (scope: RandomScope) => {
      const pool = getScenesForScope(scope);
      setRandomScene(pickRandom(pool));
      setRandomScope(scope);
      setShowRandomModal(true);
      setShowDetailModal(false);
    },
    [getScenesForScope]
  );

  const handleStartTravel = useCallback(() => {
    mapRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSelectPlace = useCallback((placeId: string) => {
    setSelectedPlaceId(placeId);
  }, []);

  const handleViewDetail = useCallback((scene: Scene) => {
    setSelectedScene(scene);
    setShowDetailModal(true);
    setShowRandomModal(false);
  }, []);

  const handleCloseDetail = useCallback(() => setShowDetailModal(false), []);

  // 全局随机
  const handleGlobalRandom = useCallback(() => openRandom({ mode: "global" }), [openRandom]);

  // 当前地点随机
  const handlePlaceRandom = useCallback(
    () => openRandom({ mode: "place", placeId: selectedPlace.id }),
    [openRandom, selectedPlace]
  );

  // 再抵达一次 — 保持当前 scope
  const handleReroll = useCallback(() => {
    const pool = getScenesForScope(randomScope);
    setRandomScene(pickRandom(pool));
  }, [randomScope, getScenesForScope]);

  const handleCloseRandom = useCallback(() => setShowRandomModal(false), []);

  const handleViewFullFromRandom = useCallback(() => {
    if (randomScene) {
      setSelectedScene(randomScene);
      setShowDetailModal(true);
      setShowRandomModal(false);
    }
  }, [randomScene]);

  // 弹窗中"随机抵达一站" — 全局随机
  const handleRandomNext = useCallback(() => {
    setSelectedScene(pickRandom(allScenes));
    setShowDetailModal(true);
  }, [allScenes]);

  return (
    <div className="min-h-screen" style={{ background: "#f3ece0", color: "#2b2118" }}>
      <HeroSection
        onStartTravel={handleStartTravel}
        onRandomScene={handleGlobalRandom}
        randomScene={randomScene}
      />

      <section ref={mapRef} id="map-section" className="pt-8 pb-4 md:pt-14 md:pb-8 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-4 md:mb-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#2b2118] mb-1">文学地图</h2>
            <p className="text-[#6b5a45] text-sm md:text-base leading-[1.7]">
              点击地图上的地点，查看它在《万水千山走遍》里的文学场景。
            </p>
          </div>

          {/* desktop map */}
          <div className="hidden md:block">
            <LiteraryWorldMap
              places={places}
              selectedPlaceId={selectedPlaceId}
              onSelectPlace={handleSelectPlace}
            />
          </div>

          {/* mobile map + chips */}
          <div className="md:hidden" style={{ maxHeight: 280, overflow: "hidden" }}>
            <LiteraryWorldMap
              places={places}
              selectedPlaceId={selectedPlaceId}
              onSelectPlace={handleSelectPlace}
            />
          </div>
          <div className="md:hidden mt-3 flex flex-wrap justify-center gap-2">
            {places.map((place) => (
              <button
                key={place.id}
                type="button"
                onClick={() => handleSelectPlace(place.id)}
                className={`place-chip ${place.id === selectedPlaceId ? "place-chip-active" : ""}`}
              >
                {place.displayName}
              </button>
            ))}
          </div>

          {/* 全局随机按钮 */}
          <div className="flex justify-center mt-3 md:mt-4">
            <button type="button" onClick={handleGlobalRandom} className="btn-ghost font-medium">
              随机抵达一站
            </button>
          </div>

          {/* 地点信息 + 场景 */}
          <div className="mt-5 md:mt-8">
            <PlacePanel
              place={selectedPlace}
              onSelectScene={handleViewDetail}
              onRandomInPlace={handlePlaceRandom}
            />

            <div className="mt-5 md:mt-7">
              <SceneGrid scenes={selectedPlace.scenes} onViewDetail={handleViewDetail} />
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {showDetailModal && selectedScene && (
        <SceneDetailModal
          scene={selectedScene}
          onClose={handleCloseDetail}
          onRandomNext={handleRandomNext}
        />
      )}

      {showRandomModal && randomScene && (
        <RandomSceneModal
          scene={randomScene}
          scope={randomScope}
          onClose={handleCloseRandom}
          onReroll={handleReroll}
          onViewFull={handleViewFullFromRandom}
        />
      )}
    </div>
  );
}
