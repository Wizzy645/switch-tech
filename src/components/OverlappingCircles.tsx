import Image from "next/image";

const OverlappingCircles = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 my-16">
      {/* Circle 1 */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-[6px] border-yellow-400 overflow-hidden z-10">
        <Image
          src="/excavator.jpg"
          alt="Construction"
          fill
          className="object-cover"
        />
      </div>

      {/* Circle 2 - overlapping */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border-[6px] border-yellow-400 overflow-hidden z-20 sm:-ml-12">
        <Image
          src="/skyscraper.jpg"
          alt="Skyscraper"
          fill
          className="object-cover"
        />
      </div>

      {/* Circle 3 */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-[6px] border-yellow-400 overflow-hidden z-10 sm:-ml-12">
        <Image
          src="/modern-building.jpg"
          alt="Modern Building"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default OverlappingCircles;
