"use client";

import { ReactNode, useRef } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

interface ScrollProps {
  children: ReactNode;
}

export default function ScrollAnimation({ children }: ScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mengimpor sensor pencatat posisi scroll khusus untuk komponen ini saja
  const { useScroll, useTransform } = require("framer-motion");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Mengunci deteksi dari ujung bawah komponen hingga ujung atas komponen masuk layar
    offset: ["start end", "end start"],
  });

  // 1. Logika Kejelasan (Opacity):
  // Saat baru mau masuk = 0 (transparan), di tengah layar = 1 (nyata), saat keluar layar = 0 (transparan)
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // 2. Logika Arah Gerakan Fisika (Y-Axis/Vertikal):
  // [0] Baru masuk dari bawah: posisi koordinat diturunkan (+100px) agar meluncur naik
  // [0.3 ke 0.7] Berada di tengah layar: posisi koordinat normal (0px) diam terkunci
  // [1] Keluar ke atas langit-langit: posisi koordinat dinaikkan (-100px) agar meluncur hilang ke atas
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <div ref={containerRef} className="w-full">
      <MotionDiv
        style={{ opacity, y }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }} // Efek pegas elastis agar tidak kaku
      >
        {children}
      </MotionDiv>
    </div>
  );
}
