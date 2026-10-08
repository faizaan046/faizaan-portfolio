"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ProjectImage as ProjectImageType } from "@/types/portfolio";

interface ProjectImageProps {
  image: ProjectImageType;
  className?: string;
  priority?: boolean;
}

/**
 * ProjectImage — handles real images and styled placeholders.
 * When `image.src` is empty or fails to load, the placeholder is shown.
 * To add a real image: set `src` in the data file and drop the file in
 * the matching public/ directory.
 */
export default function ProjectImage({
  image,
  className = "",
  priority = false,
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const hasImage = Boolean(image.src) && !hasError;

  if (!hasImage) {
    return (
      <div
        className={`img-placeholder ${className}`}
        role="img"
        aria-label={image.alt}
        style={{
          aspectRatio: `${image.width} / ${image.height}`,
          minHeight: 200,
        }}
      >
        <ImageIcon
          size={24}
          strokeWidth={1.25}
          style={{ color: "var(--bd)" }}
          aria-hidden="true"
        />
        <span className="img-placeholder-label">{image.placeholderLabel}</span>
        <span className="img-placeholder-dims">{image.placeholderDimensions}</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1120px) 60vw, 640px"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
