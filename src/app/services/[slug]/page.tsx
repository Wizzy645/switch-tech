"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Truck, Plane, Ship, Users, PackageCheck, SprayCan,
  BriefcaseBusiness, UserCog, Wrench, CheckCircle2,
  ShieldCheck, Radio, Rocket, AirVent, Building2, Landmark,
  MonitorSmartphone, FileText, MousePointerClick, Code
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OverlappingCircles from "@/components/OverlappingCircles";

export default function ServiceDetails() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) return null;

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-gray-700">
  {[
    {
      icon: <Truck className="mx-auto mb-4 text-[#0B3B60]" size={32} />,
      title: "Road Delivery",
      desc: "Reliable last-mile and inter-state transport across Nigeria and West Africa, optimized for cost and speed.",
    },
    {
      icon: <Plane className="mx-auto mb-4 text-[#0B3B60]" size={32} />,
      title: "Air Cargo",
      desc: "Swift movement of high-priority or time-sensitive cargo using our network of air freight partners and handlers.",
    },
    {
      icon: <Ship className="mx-auto mb-4 text-[#0B3B60]" size={32} />,
      title: "Shipping",
      desc: "We coordinate full ocean freight operations—from containerized goods to bulk cargo—with real-time tracking.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
    >
      {item.icon}
      <p className="font-semibold text-[#0077A3] mb-2">{item.title}</p>
      <p className="text-gray-600">{item.desc}</p>
    </div>
  ))}
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
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-sm text-gray-700">
  {[
    {
      title: "Aircraft Handling",
      icon: <Plane className="mx-auto text-[#0B3B60]" size={32} />,
      desc: "Efficient ramp services, towing, parking, and ground operations for all aircraft types.",
    },
    {
      title: "Passenger Handling",
      icon: <Users className="mx-auto text-[#0B3B60]" size={32} />,
      desc: "End-to-end assistance from check-in to boarding, ensuring smooth passenger experience.",
    },
    {
      title: "Cargo Handling",
      icon: <PackageCheck className="mx-auto text-[#0B3B60]" size={32} />,
      desc: "Safe and secure loading, unloading, storage, and transfer of freight and cargo units.",
    },
    {
      title: "Crew Transportation",
      icon: <Users className="mx-auto text-[#0B3B60]" size={32} />,
      desc: "Timely and secure transfers for flight crews between terminals, hotels, and aircraft.",
    },
    {
      title: "Aviation Coordination",
      icon: <Plane className="mx-auto text-[#0B3B60]" size={32} />,
      desc: "Centralized communication and logistics to ensure all operations align on schedule.",
    },
    {
      title: "Aircraft Disinfection",
      icon: <SprayCan className="mx-auto text-[#0B3B60]" size={32} />,
      desc: "Thorough cleaning and disinfection protocols to maintain hygiene and airworthiness.",
    },
  ].map((service, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {service.icon}
      <p className="font-semibold mt-4 text-[#0077A3] mb-2">{service.title}</p>
      <p className="text-gray-600">{service.desc}</p>
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
    desc: "Rigorous monitoring and reporting systems to ensure that every stage of your project stays on track and on budget.",
  },
  {
    icon: <Wrench className="mx-auto text-[#0B3B60]" size={32} />,
    label: "Front-End & Detailed Engineering",
    desc: "Comprehensive design and documentation for seamless execution, from schematics to specs and testing protocols.",
  },
  {
    icon: <CheckCircle2 className="mx-auto text-[#0B3B60]" size={32} />,
    label: "Concept & Feasibility Selection",
    desc: "Assessing technical, financial, and operational viability to ensure your project starts with the right foundation.",
  },
  {
    icon: <UserCog className="mx-auto text-[#0B3B60]" size={32} />,
    label: "Personnel & Resource Management",
    desc: "Assigning skilled experts, tools, and timelines effectively for consistent delivery and quality assurance.",
  },
  {
    icon: <Wrench className="mx-auto text-[#0B3B60]" size={32} />,
    label: "Technology & Innovation Alignment",
    desc: "Aligning every project with the latest tools, platforms, and processes for a smarter, faster build.",
  },
  {
    icon: <CheckCircle2 className="mx-auto text-[#0B3B60]" size={32} />,
    label: "Cost Optimization Strategy",
    desc: "Balancing performance and expenditure using value engineering and lifecycle cost analysis.",
  },
].map((item, i) => (
  <div
    key={i}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    {item.icon}
    <p className="font-semibold mt-4 text-[#0077A3] mb-2">{item.label}</p>
    <p className="text-sm text-gray-600">{item.desc}</p>
  </div>
))}

        </div>
      </div>
    </section>
     <Footer />
      </>
  );
}
if (slug === "digital") {
  return (
    <>
     <Navbar />
    <section className="min-h-screen bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative h-[65vh] w-full">
        <Image
          src="/digital.jpg"
          alt="Digital Services"
          layout="fill"
          objectFit="cover"
          className="object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70 flex items-center justify-center">
          <div className="text-white text-center px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Digital & Application Software
            </h1>
            <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto text-white/80">
              From marketing to software, we empower your digital transformation journey.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3B60] mb-10 text-center">
          Our Digital Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
  {[
    {
      icon: <MousePointerClick size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Digital Marketing",
      description: "Our digital marketing service goes beyond just posting ads. We craft targeted strategies using social media, search engines, and data analytics to help businesses build strong online identities, increase visibility, and convert audiences into loyal customers.",
    },
    {
      icon: <FileText size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Content Development",
      description: "We produce high-impact written, visual, and interactive content designed to inform, educate, and emotionally connect with your audience. This includes blogs, brand storytelling, infographics, videos, and more—structured to support both engagement and SEO.",
    },
    {
      icon: <Code size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Software Solutions",
      description: "We design and develop customized software tailored to solve real business challenges. From internal tools to client-facing platforms, our solutions are scalable, secure, and future-ready—ensuring your digital systems grow as your business grows.",
    },
    {
      icon: <MonitorSmartphone size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Desktop & Mobile",
      description: "We build intuitive and fast applications for web, desktop, and mobile devices. Whether it's an Android app, iOS solution, or cross-platform system, we ensure performance, usability, and design that meet both user expectations and business goals.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-[#e3eaf0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group hover:bg-gradient-to-tr hover:from-[#edf8ff] hover:to-[#f2fbff]"
    >
      <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
        {item.icon}
      </div>
      <p className="font-semibold text-[#0B3B60] text-lg mb-2">{item.label}</p>
      <p className="text-sm text-gray-600 text-left">{item.description}</p>
    </div>
  ))}
</div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/#contact")}
            className="bg-[#0B3B60] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#09476f] transition"
          >
            Let’s Build Something Amazing
          </button>
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
    {
      icon: <Rocket size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Fighter Jets",
      description:
        "Equipped for air superiority, our fighter jets provide rapid-response defense and precision strike capabilities — critical for both homeland security and international operations.",
    },
    {
      icon: <ShieldCheck size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Military Tanks",
      description:
        "We procure armored ground vehicles designed for durability, terrain dominance, and heavy-fire engagement — empowering ground forces with unmatched protection and mobility.",
    },
    {
      icon: <AirVent size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Gun Helicopters",
      description:
        "Our attack helicopters support reconnaissance and firepower in close-combat zones. Their agility makes them indispensable for tactical missions and urban warfare.",
    },
    {
      icon: <Radio size={32} className="mx-auto text-[#0B3B60]" />,
      label: "Secure Communications",
      description:
        "Military-grade encrypted systems that enable real-time command coordination, strategic intel sharing, and cyber-defense—vital for modern warfare operations.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {item.icon}
      <p className="font-semibold mt-4 text-[#0077A3]">{item.label}</p>
      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
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
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-gray-700">
  {[
    {
      label: "Hardware",
      desc: "We supply reliable, performance-driven hardware — from workstations to enterprise-grade servers — tailored to support your daily operations.",
    },
    {
      label: "Disaster Recovery",
      desc: "Ensure business continuity with our backup, failover, and recovery solutions designed to protect critical data and reduce downtime.",
    },
    {
      label: "Network Infrastructure",
      desc: "From cabling to routers, we design and deploy high-speed, secure networks that power communication across your business ecosystem.",
    },
    {
      label: "Enterprise Solutions",
      desc: "We implement scalable ERP, CRM, and workflow platforms that unify departments and drive smarter decision-making across large teams.",
    },
    {
      label: "System Management",
      desc: "Our remote and on-site system monitoring services keep your infrastructure healthy, updated, and running at optimal efficiency.",
    },
    {
      label: "Security",
      desc: "Protect your systems from cyber threats with layered security — including firewalls, access controls, antivirus, and real-time alerts.",
    },
    {
      label: "Internet & Hosting",
      desc: "Reliable hosting and fast, stable internet services for websites, email, cloud applications, and more — all managed end-to-end.",
    },
    {
      label: "Specialist Applications",
      desc: "We develop and maintain industry-specific software — whether for healthcare, finance, education, or logistics — to give you a competitive edge.",
    },
  ].map((item, i) => (
    <div key={i} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <h3 className="text-[#0B3B60] font-semibold mb-2">{item.label}</h3>
      <p className="text-sm text-gray-600">{item.desc}</p>
    </div>
  ))}
</div>


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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-gray-700 mb-16">
            {[
              {
                label: "Residential & Commercial",
                icon: <Building2 size={32} className="mx-auto text-[#0B3B60]" />,
                desc: "From private housing to office complexes, we design and develop spaces that are functional, modern, and built to last. Our projects meet safety codes and community needs.",
              },
              {
                label: "Road Construction",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-[#0B3B60]" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16M4 4h16M12 4v16" />
                  </svg>
                ),
                desc: "We build durable, high-traffic roads using sustainable materials and engineering methods that withstand African terrain and improve mobility and commerce.",
              },
              {
                label: "Bridge Construction",
                icon: <Landmark size={32} className="mx-auto text-[#0B3B60]" />,
                desc: "Our bridge solutions connect cities and regions — ensuring safe, efficient transit over rivers, valleys, and difficult landscapes. Precision and durability are our priority.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div>{item.icon}</div>
                <p className="mt-4 font-semibold text-[#0077A3]">{item.label}</p>
                <p className="text-sm mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Overlapping Image Design */}
          <OverlappingCircles />
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
        <h2 className="text-2xl font-bold text-[#0B3B60] mt-10 mb-4">Also Covering:</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
  {[
    {
      title: "Engineering Manpower & Training",
      desc: "We supply highly trained engineers and conduct hands-on training programs to keep your technical team skilled, up-to-date, and certified.",
    },
    {
      title: "Project Technical Assistance",
      desc: "Our engineers provide field and remote technical support during all project phases—from planning to commissioning and troubleshooting.",
    },
    {
      title: "Equipment Inspections & Reliability",
      desc: "We conduct in-depth equipment inspections to ensure performance, identify early signs of failure, and reduce downtime through predictive maintenance.",
    },
    {
      title: "Transmission Systems & Transformer Deployment",
      desc: "Swich handles the design, setup, and deployment of efficient power transmission systems and transformers tailored for commercial and industrial use.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white p-5 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
    >
      <h3 className="font-semibold text-[#0B3B60] mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.desc}</p>
    </div>
  ))}
</div>

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