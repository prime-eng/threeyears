
"use client";

import { useState } from "react";

type PhotoCardProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function PhotoCard({
  src,
  alt,
  className = "",
}: PhotoCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`photo-card ${className}`}>
      {imageError && (
        <div className="photo-placeholder">
          <span>♡</span>
          <p>Foto kenangan kita</p>
          <small>Letakkan foto di folder public/images</small>
        </div>
      )}

      {!imageError && (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
        />
      )}

      <span className="photo-caption">{alt}</span>
    </div>
  );
}
