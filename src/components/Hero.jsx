"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/istockphoto-872349206-612x612.webp')" }}

    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
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
