"use client";

import { useEffect, useState } from "react";

interface SceneImageProps {
  src: string;
  alt: string;
}

export default function SceneImage({ src, alt }: SceneImageProps) {
  const jpgSrc = src.replace(/\.webp$/, ".jpg");
  const [triedJpg, setTriedJpg] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setTriedJpg(false);
    setImgError(false);
  }, [src]);

  const currentSrc = triedJpg ? jpgSrc : src;

  const handleError = () => {
    if (!triedJpg) {
      setTriedJpg(true);
    } else {
      setImgError(true);
    }
  };

  if (imgError) return null;

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#2b2118]/10 shadow-sm bg-[#efe1c8]" style={{ aspectRatio: "16 / 9" }}>
      <img
        key={src}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-contain"
        style={{
          filter: "sepia(0.08) saturate(0.9) contrast(0.98)",
          WebkitFilter: "sepia(0.08) saturate(0.9) contrast(0.98)",
        }}
        onError={handleError}
      />
    </div>
  );
}
