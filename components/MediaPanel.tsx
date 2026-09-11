"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MediaPanelProps = {
  type: "video" | "image";
  src?: string;
  alt: string;
  gradient: string;
  className?: string;
};

export default function MediaPanel({
  type,
  src,
  alt,
  gradient,
  className = "",
}: MediaPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  // Reset error state when the media source changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  // Automatically play/pause video depending on viewport visibility
  useEffect(() => {
    if (type !== "video" || !src || hasError || !videoRef.current) {
      return;
    }

    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay may be blocked by browser settings
          });
        } else {
          video.pause();
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [type, src, hasError]);

  const showPlaceholder = !src || hasError;

  return (
    <div
      className={`
        group
        relative
        h-[280px]
        w-full
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.02]
        shadow-2xl
        transition-all
        duration-700
        hover:border-white/20
        hover:shadow-black/40
        sm:h-[310px]
        md:h-[380px]
        lg:h-[460px]
        xl:h-[500px]
        ${className}
      `}
    >
      {!showPlaceholder ? (
        type === "video" ? (
          <video
            ref={videoRef}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-105
            "
            src={src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label={alt}
            onError={() => setHasError(true)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={false}
            sizes="
              (min-width: 1280px) 50vw,
              (min-width: 768px) 50vw,
              100vw
            "
            className="
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-105
            "
            onError={() => setHasError(true)}
          />
        )
      ) : (
        <div
          className={`
            flex
            h-full
            w-full
            items-center
            justify-center
            bg-gradient-to-br
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-105
            ${gradient}
          `}
        >
          <span
            className="
              font-body
              text-xs
              uppercase
              tracking-[0.35em]
              text-text-primary/40
            "
          >
            {type === "video" ? "Video" : "Image"}
          </span>
        </div>
      )}

      {/* Subtle dark overlay for premium glass effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/20
          via-transparent
          to-white/[0.03]
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Soft border highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[2rem]
          ring-1
          ring-inset
          ring-white/[0.05]
        "
      />
    </div>
  );
}