"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Service {
  title: string;
  subtitle: string;
  slug: string;
  icon: string;
  summary: string;
}

const services: Service[] = [
  {
    title: "IT Services",
    subtitle: "Infrastructure & Support",
    slug: "it-services",
    icon: "/it.jpg",
    summary: "Expert IT infrastructure and systems support services tailored to enterprise needs.",
  },
  {
    title: "Engineering",
    subtitle: "Technical Support",
    slug: "engineering",
    icon: "/engineering.jpg",
    summary: "Providing full-range engineering services and technical manpower solutions.",
  },
  {
    title: "Infrastructure",
    subtitle: "Road & Bridge Projects",
    slug: "infrastructure",
    icon: "/infrastructure.jpg",
    summary: "Design and execution of high-impact infrastructure development across sectors.",
  },
  {
    title: "Aviation",
    subtitle: "Handling Services",
    slug: "aviation",
    icon: "/aviation.jpg",
    summary: "Comprehensive ground and passenger handling services across major airports.",
  },
  {
    title: "Logistics",
    subtitle: "End-to-End Delivery",
    slug: "logistics",
    icon: "/logistics.jpg",
    summary: "Seamless supply chain logistics and delivery solutions built for scale.",
  },
  {
    title: "Project Mgmt",
    subtitle: "Plan & Execute",
    slug: "project-management",
    icon: "/project-mgmt.jpg",
    summary: "From concept to delivery, we manage projects with precision and clarity.",
  },
  {
    title: "Digital",
    subtitle: "Web & Software",
    slug: "digital",
    icon: "/digital.jpg",
    summary: "Modern digital solutions, from websites to scalable enterprise software.",
  },
  {
    title: "Military",
    subtitle: "Defense Procurement",
    slug: "military",
    icon: "/military.jpg",
    summary: "Secure military-grade procurement and logistics with full compliance.",
  },
];

const loopedServices = [...services, ...services];

export default function ServicesAutoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [activeModal, setActiveModal] = useState<Service | null>(null);

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let animationFrameId: number;

  const scroll = () => {
    if (!isHovered && container) {
      container.scrollLeft += 1;

      // Reset scroll when reaching half of the total width (after looping)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    }
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, [isHovered]);


  return (
    <section id="services" className="py-20 bg-[#F9FAFB]">
      <h2 className="text-center text-3xl font-bold text-[#0B3B60] mb-10">
        Explore Our Services
      </h2>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-6 overflow-x-auto px-6 scrollbar-hide scroll-smooth whitespace-nowrap"
      >
        {loopedServices.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveModal(service)}
            className="relative w-52 h-72 rounded-xl flex-shrink-0 cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.icon})` }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2">
              <p className="text-lg font-bold drop-shadow-md">{service.title}</p>
              <p className="text-sm text-gray-200 drop-shadow-sm">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-black"
            >
              &times;
            </button>
            <Image
              src={activeModal.icon}
              alt={activeModal.title}
              width={500}
              height={300}
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-[#0B3B60] mb-2">
              {activeModal.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm">{activeModal.summary}</p>
            <button
              onClick={() => {
                router.push(`/services/${activeModal.slug}`);
                setActiveModal(null);
              }}
              className="bg-[#0B3B60] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0a2d4c] transition"
            >
              See More
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
