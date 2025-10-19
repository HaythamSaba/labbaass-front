"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

function  ClassificationList({
  active,
  filters,
  textColor,
  backgroundColor,
  onFilterChange,
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Set initial active filter from URL or default to first filter
  const initialFilter = active ?? searchParams.get("classification") ?? filters[0].id;
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    // Update activeFilter if URL changes externally
    const urlFilter = searchParams.get("classification") ?? filters[0].id;
    setActiveFilter(urlFilter);
  }, [searchParams, filters]);

  const handleFilterClick = (filterId) => {
    // Update URL query param
    const params = new URLSearchParams(searchParams);
    params.set("classification", filterId);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    // Update local state
    setActiveFilter(filterId);

    // Notify parent component
    if (onFilterChange) onFilterChange(filterId);
  };

  return (
    <ul className="flex flex-col justify-center items-center md:flex md:flex-row py-2 bg-[#FAFAFA] rounded-full md:rounded-lg">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        const IconComponent = filter.icon;
        const iconColor = isActive ? textColor : "#94989E";

        return (
          <li key={filter.id}>
            <button
              onClick={() => handleFilterClick(filter.id)}
              className={`flex items-center justify-between py-2 px-2 gap-1 rounded-md md:rounded-lg duration-200 text-[12.8px] cursor-pointer ${
                isActive ? "" : "text-gray-600 hover:bg-white"
              }`}
              style={
                isActive
                  ? { backgroundColor: backgroundColor, color: textColor }
                  : {}
              }
            >
              {IconComponent && (
                <IconComponent color={iconColor} className="w-5 h-5" />
              )}
              <span className="font-medium ">{filter.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ClassificationList;
