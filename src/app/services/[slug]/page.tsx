import React from 'react';
import Image from "next/image";
import { Truck, Plane, Ship } from "lucide-react";
import { Users, PackageCheck, SprayCan } from "lucide-react";
import { BriefcaseBusiness, UserCog, Wrench, CheckCircle2 } from "lucide-react";
import { ShieldCheck, Radio, Rocket, AirVent } from "lucide-react";
import { Building2, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



interface Params {
  slug: string;
}

export default async function ServiceDetails({ params }: { params: Promise<Params> }) {
  const { slug } = await params;


  if (slug === 'logistics') {
    return (
      <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Banner */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/logistics.jpg"
          alt="Swich Logistics"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">Logistics</h1>
            <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto text-white/80">
              Swich Logistics delivers seamless supply chain experiences across Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3B60] mb-6 text-center">Our Strategy</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          We partner with world-class organizations to build a logistics network that’s scalable, efficient, and tailored to our client’s needs. Our focus is on innovation and integration for maximum operational visibility.
        </p>

        <ul className="grid sm:grid-cols-3 gap-8 text-gray-700 text-md">
          {[
            "Partnering with world-class organizations to provide a global competitive advantage.",
            "Using an information-driven supply chain with skilled personnel integration.",
            "Becoming an extension of our clients — anticipating and solving challenges proactively.",
          ].map((point, index) => (
            <li
              key={index}
              className="bg-white border-l-4 border-[#00B4D8] shadow-md p-6 rounded-xl hover:shadow-lg transition"
            >
              <span className="block text-gray-600 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Channels Section */}
      <div className="bg-gradient-to-br from-[#E0F7FA] to-[#F9FAFB] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B3B60] mb-10 text-center">Logistics Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
              <Truck className="mx-auto mb-4 text-[#0B3B60]" size={32} />
              <p className="font-semibold text-[#0077A3]">Road Delivery</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
              <Plane className="mx-auto mb-4 text-[#0B3B60]" size={32} />
              <p className="font-semibold text-[#0077A3]">Air Cargo</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
              <Ship className="mx-auto mb-4 text-[#0B3B60]" size={32} />
              <p className="font-semibold text-[#0077A3]">Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <Footer />
      </>
  );

  }

  if (slug === 'aviation') {
    return (
      <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/aviation.jpg"
          alt="Swich Aviation"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Aviation
            </h1>
            <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto text-white/80">
              Leading ground and cargo handling across Nigeria’s major airports.
            </p>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3B60] mb-6 text-center">
          Our Expertise in Aviation
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Swich Aviation operates with precision and safety as top priority, ensuring top-tier services for airlines, cargo, and personnel across Nigeria’s top airports.
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { title: "Aircraft Handling", icon: <Plane className="mx-auto text-[#0B3B60]" size={32} /> },
            { title: "Passenger Handling", icon: <Users className="mx-auto text-[#0B3B60]" size={32} /> },
            { title: "Cargo Handling", icon: <PackageCheck className="mx-auto text-[#0B3B60]" size={32} /> },
            { title: "Crew Transportation", icon: <Users className="mx-auto text-[#0B3B60]" size={32} /> },
            { title: "Aviation Coordination", icon: <Plane className="mx-auto text-[#0B3B60]" size={32} /> },
            { title: "Aircraft Disinfection", icon: <SprayCan className="mx-auto text-[#0B3B60]" size={32} /> },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {service.icon}
              <p className="font-semibold mt-4 text-[#0077A3]">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <Footer />
      </>
  );
  }

  if (slug === "project-management") {
  return (
    <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/project-mgmt.jpg"
          alt="Project Management"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Project Management
            </h1>
            <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto text-white/80">
              Efficient planning, execution, and delivery — with excellence at every phase.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3B60] mb-6 text-center">
          Excellence Across the Lifecycle
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Our experience in project management stems from hands-on delivery across all lifecycle phases — from concept to final execution. With cost, timeline, and quality always in focus, we enable our clients to scale confidently.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <BriefcaseBusiness className="mx-auto text-[#0B3B60]" size={32} />,
              label: "Project Control & Oversight",
            },
            {
              icon: <Wrench className="mx-auto text-[#0B3B60]" size={32} />,
              label: "Front-End & Detailed Engineering",
            },
            {
              icon: <CheckCircle2 className="mx-auto text-[#0B3B60]" size={32} />,
              label: "Concept & Feasibility Selection",
            },
            {
              icon: <UserCog className="mx-auto text-[#0B3B60]" size={32} />,
              label: "Personnel & Resource Management",
            },
            {
              icon: <Wrench className="mx-auto text-[#0B3B60]" size={32} />,
              label: "Technology & Innovation Alignment",
            },
            {
              icon: <CheckCircle2 className="mx-auto text-[#0B3B60]" size={32} />,
              label: "Cost Optimization Strategy",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {item.icon}
              <p className="font-semibold mt-4 text-[#0077A3]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <Footer />
      </>
  );
}
  if (slug === "military") {
  return (
    <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/military.jpg"
          alt="Military Procurement"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Military Procurement
            </h1>
            <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto text-white/80">
              Swich Tech supports secure, compliant defense logistics for national and global missions.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3B60] mb-8 text-center">
          Strategic Defense Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Rocket size={32} className="mx-auto text-[#0B3B60]" />, label: "Fighter Jets" },
            { icon: <ShieldCheck size={32} className="mx-auto text-[#0B3B60]" />, label: "Military Tanks" },
            { icon: <AirVent size={32} className="mx-auto text-[#0B3B60]" />, label: "Gun Helicopters" },
            { icon: <Radio size={32} className="mx-auto text-[#0B3B60]" />, label: "Secure Communications" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {item.icon}
              <p className="font-semibold mt-4 text-[#0077A3]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <Footer />
      </>
  );
}

  if (slug === "it-services") {
  return (
    <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/it.jpg"
          alt="IT Services"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-center px-6">
          <div>
            <h1 className="text-5xl font-extrabold drop-shadow-lg">IT Infrastructure</h1>
            <p className="mt-4 text-lg font-medium text-white/80 max-w-2xl mx-auto">
              All the systems, support, and infrastructure your business needs—delivered by Swich experts.
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          From desktops to enterprise-grade networks, our experts deliver scalable infrastructure and tech solutions that keep you ahead.
        </p>

        <p className="text-blue-800 font-semibold italic mb-2">Infrastructural Solutions & Services:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-gray-700">
          {[
            "Hardware",
            "Disaster Recovery",
            "Network Infrastructure",
            "Enterprise Solutions",
            "System Management",
            "Security",
            "Internet & Hosting",
            "Specialist Applications",
          ].map((item, i) => (
            <li key={i} className="bg-white p-4 shadow-sm rounded-md">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#0B3B60] mb-4">Our 3-Pronged ICT Process</h2>
        {[
          { title: "Design", desc: "Full IT architecture, from LAN to telephony, power, and cooling." },
          { title: "Build", desc: "Carefully managed construction with full compliance & efficiency." },
          { title: "Construct", desc: "Includes cabling, electrical, patch rooms, and integrated testing." }
        ].map((step, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
     <Footer />
      </>
  );
}

  if (slug === "infrastructure") {
  return (
    <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/infrastructure.jpg"
          alt="Infrastructure"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl font-extrabold drop-shadow">Infrastructure Development</h1>
            <p className="mt-3 text-lg text-white/80">
              Sustainable growth, engineered through strategic infrastructure delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <p className="text-gray-700 mb-6">
          Infrastructure is at the core of Africa&apos;s transformation. Our role at Swich is to drive it with precision and integrity.
        </p>
        <h2 className="text-2xl font-bold text-[#0B3B60] mb-4">Our Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Residential & Commercial", icon: <Building2 size={32} className="mx-auto text-[#0B3B60]" /> },
            { label: "Road Construction",  },
            { label: "Bridge Construction", icon: <Landmark size={32} className="mx-auto text-[#0B3B60]" /> },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center transition-all duration-300"
            >
              {item.icon}
              <p className="mt-4 font-semibold text-[#0077A3]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <Footer />
      </>
  );
}

  if (slug === "engineering") {
  return (
    <>
        <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/engineering.jpg"
          alt="Engineering Services"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">Engineering & Technical Services</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Swich delivers engineering solutions that drive innovation, compliance, and technical superiority.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Swich provides a full range of electrical, mechanical, and technical engineering services—backed by solid experience across all phases.
        </p>
        <p>
          This includes front-end engineering, feasibility studies, stress testing, failure analysis, and risk evaluations.
        </p>
        <p className="font-semibold italic text-blue-700">Also covering:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Engineering Manpower & Training</li>
          <li>Project Technical Assistance</li>
          <li>Equipment Inspections & Reliability</li>
          <li>Transmission Systems & Transformer Deployment</li>
        </ul>
      </div>
    </section>
     <Footer />
      </>
  );
}

  return (
    <>
        <Navbar />
    <div className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0B3B60] capitalize mb-6">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-lg text-gray-600">
        Full details about <strong>{slug}</strong> will be displayed here...
      </p>
    </div>
     <Footer />
      </>
  );
} 