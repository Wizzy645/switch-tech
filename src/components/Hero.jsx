"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Hero() {
  const router = useRouter();

  const videoClips = ["/hero1.mp4", "/hero2.mp4", "/hero3.mp4", "/hero4.mp4"];
  const [index, setIndex] = useState(0);

  // Auto switch videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videoClips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Preload videos */}
      <Head>
        {videoClips.map((clip, i) => (
          <link key={i} rel="preload" as="video" href={clip} />
        ))}
      </Head>

      {/* Fallback Background Image */}
      <Image
        src="/hero-fallback.jpg" // Make sure this exists in your /public folder
        alt="Swich Tech Hero Background"
        fill
        className="object-cover absolute inset-0 w-full h-full z-0"
        priority
      />

      {/* Rotating Videos with crossfade */}
      {videoClips.map((clip, i) => (
        <video
          key={i}
          src={clip}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-20" />

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg mb-6">
          Powering Global Solutions
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-200 drop-shadow-sm mb-10">
          Transforming Infrastructure, Technology & Innovation for the Future
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => router.push("#contact")}
            className="bg-[#0B3B60] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#09324f] transition shadow-md"
          >
            Get in Touch
          </button>
          <button
            onClick={() => router.push("#services")}
            className="border border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition shadow-md"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
