import { Lightbulb, Target } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-[#F9FAFB] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Who We Are */}
        <div>
          <h2 className="text-3xl font-bold text-[#0B3B60] mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Swich Tech is a proudly Nigerian technology and infrastructure company
            with over 7 years of excellence in compliance, registration, and innovation.
            Registered under CAC with license 359 & Tech – 708832, headquartered in Abuja.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3 text-[#0B3B60]">
            <Lightbulb size={20} />
            <h3 className="text-lg font-semibold">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            To inspire digital and structural transformation across Africa and beyond.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3 text-[#0B3B60]">
            <Target size={20} />
            <h3 className="text-lg font-semibold">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To consistently deliver fast, secure, and reliable solutions that solve real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
