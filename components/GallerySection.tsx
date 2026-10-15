"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import ScrollAnimation from "./ScrollAnimation";
import { gallery } from "@/lib/data";

export default function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = [...gallery, ...gallery]; // duplicate for seamless loop

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    void track.offsetWidth; // force reflow for animation start
  }, []);

  return (
    <ScrollAnimation>
      <section
        id="gallery"
        className="section-padding border-b border-ink-200 bg-white"
      >
        <div className="container-max">
          <SectionHeader
            label="Media"
            title="Gallery"
            subtitle="Selected images and visual highlights."
          />
          <div className="relative overflow-hidden">
            <div ref={trackRef} className="flex animate-gallery-loop">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 mr-4"
                >
                  <Image
                    src={item.Image}
                    alt={item.title ?? "gallery image"}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                  {item.title && (
                    <p className="mt-2 text-center text-sm text-ink-600">
                      {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes gallery-loop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-gallery-loop {
            animation: gallery-loop 20s linear infinite;
          }
        `}</style>
      </section>
    </ScrollAnimation>
  );
}
