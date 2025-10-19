"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import UserOpinionCard from "./UserOpinionCard";

function chunk(arr, size = 3) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function UserOpinionsCarousel({ opinions, doctor }) {
  // Filter only opinions for the current doctor
  const filteredOpinions = useMemo(
    () => opinions.filter((op) => op.doctorName === doctor.name),
    [opinions, doctor]
  );

  // Dynamic chunk size based on screen size
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint
        setChunkSize(1);
      } else if (window.innerWidth < 1024) {
        // lg breakpoint
        setChunkSize(2);
      } else {
        setChunkSize(3);
      }
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const slides = useMemo(
    () => chunk(filteredOpinions, chunkSize),
    [filteredOpinions, chunkSize]
  );
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (current > slides.length - 1) setCurrent(Math.max(0, slides.length - 1));
  }, [slides.length, current]);

  useEffect(() => {
    const el = slideRefs.current[current];
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
  }, [current]);

  if (filteredOpinions.length === 0)
    return (
      <p className="text-center py-6 text-sm md:text-base">
        لا توجد آراء لهذا الطبيب بعد.
      </p>
    );

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-2 sm:gap-4 lg:gap-6 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            ref={(el) => (slideRefs.current[idx] = el)}
            className="min-w-full snap-start flex justify-center gap-2 sm:gap-4 lg:gap-6 px-1 sm:px-2 lg:px-4"
          >
            {slide.map((opinion) => (
              <div
                key={opinion.id}
                className={`flex-1 ${
                  chunkSize === 1
                    ? "max-w-full"
                    : chunkSize === 2
                    ? "max-w-md"
                    : "max-w-sm"
                }`}
              >
                <UserOpinionCard
                  opinion={opinion.opinion}
                  userRating={opinion.userRating}
                  datePublished={opinion.datePublished}
                  name={opinion.name}
                  doctor={doctor}
                />
              </div>
            ))}

            {/* Fill empty slots if less than chunk size */}
            {slide.length < chunkSize &&
              new Array(chunkSize - slide.length)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`f-${i}`}
                    className={`flex-1 ${
                      chunkSize === 1
                        ? "max-w-full"
                        : chunkSize === 2
                        ? "max-w-md"
                        : "max-w-sm"
                    }`}
                  />
                ))}
          </div>
        ))}
      </div>

      {/* Navigation dots - only show if more than one slide */}
      {slides.length > 1 && (
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                i === current ? "bg-[#6000D6]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Touch/swipe indicators for mobile */}
      <div className="block sm:hidden text-center mt-4">
        <p className="text-xs text-gray-500">اسحب لرؤية المزيد</p>
      </div>
    </div>
  );
}
