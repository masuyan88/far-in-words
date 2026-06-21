"use client";

import { useEffect, useState } from "react";

interface PlaceImageProps {
  placeId: string;
  placeName: string;
  className?: string;
}

export default function PlaceImage({
  placeId,
  placeName,
  className = "",
}: PlaceImageProps) {
  const webpSrc = `/images/places/${placeId}.webp`;
  const jpgSrc = `/images/places/${placeId}.jpg`;

  const [triedJpg, setTriedJpg] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setTriedJpg(false);
    setImgError(false);
  }, [placeId]);

  const currentSrc = triedJpg ? jpgSrc : webpSrc;

  const handleError = () => {
    if (!triedJpg) {
      setTriedJpg(true);
    } else {
      setImgError(true);
    }
  };

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border border-[#2b2118]/10 bg-[#efe1c8] shadow-sm ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      {!imgError ? (
        <img
          key={placeId}
          src={currentSrc}
          alt={`${placeName} 地点氛围图`}
          loading="lazy"
          className="w-full h-full object-contain"
          style={{
            filter: "sepia(0.15) saturate(0.85) contrast(0.95)",
            WebkitFilter: "sepia(0.15) saturate(0.85) contrast(0.95)",
          }}
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#efe6d4] to-[#e4d8c0]">
          <span className="text-[#6b5a45] text-sm font-semibold mb-1">
            {placeName}
          </span>
          <span className="text-[#6b5a45]/50 text-xs">
            地点氛围图待补充
          </span>
        </div>
      )}
    </div>
  );
}
