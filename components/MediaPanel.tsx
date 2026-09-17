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

  useEffect(() => {
    setHasError(false);
  }, [src]);

  useEffect(() => {
    if (type !== "video" || !src || hasError || !videoRef.current) {
      return;
    }

    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
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
        h-full
        w-full
        overflow-hidden
        rounded-[18px]
        bg-black
        ${className}
      `}
    >
      {/* MEDIA */}
      {!showPlaceholder ? (
        type === "video" ? (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            aria-label={alt}
            onError={() => setHasError(true)}
            className="
              absolute
              inset-0
              block
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.04]
            "
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
              absolute
              inset-0
              block
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.04]
            "
            onError={() => setHasError(true)}
          />
        )
      ) : (
        <div
          className={`
            absolute
            inset-0
            flex
            h-full
            w-full
            items-center
            justify-center
            bg-gradient-to-br
            ${gradient}
          `}
        >
          <span
            className="
              font-body
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-black/30
            "
          >
            {type === "video" ? "Video" : "Image"}
          </span>
        </div>
      )}

      {/* PREMIUM OVERLAY */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-tr
          from-black/10
          via-transparent
          to-white/10
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* BOTTOM SHADOW */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-1/3
          bg-gradient-to-t
          from-black/15
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* EDGE */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[inherit]
          ring-1
          ring-inset
          ring-black/[0.06]
        "
      />
    </div>
  );
}