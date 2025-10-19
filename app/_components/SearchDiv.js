"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import LocationIcon from "./icons/LocationIcon";
import SearchIcon from "./icons/SearchIcon";
import StethoscopeIcon from "./icons/StethoscopeIcon";
import { getCategories, getMunicipals } from "../_lib/api";

function SearchDiv() {
  const [categories, setCategories] = useState([]);
  const [municipals, setMunicipals] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.categories || res.data || []))
      .catch((err) => console.error("Categories error:", err));
  }, []);

  useEffect(() => {
    getMunicipals()
      .then((res) => setMunicipals(res.data || []))
      .catch((err) => console.error("Municipals error:", err));
  }, []); // ✅ prevent infinite loop
  return (
    <div className="mt-8 w-full">
      <form className="flex flex-col md:flex-row bg-background lg:w-[775px] max-w-[775px] rounded-lg z-10 relative overflow-hidden">
        {/* Inputs & selects */}
        <div className="flex flex-col md:flex-[8] md:flex-row">
          {/* Search input */}
          <input
            type="text"
            placeholder="بحث عن ..."
            className="w-full h-14 md:h-16 p-4 outline-none"
          />

          {/* Specialty select */}
          <div className="flex items-center w-full h-14 md:h-16 p-4 border-t md:border-t-0 md:border-r border-gray-300">
            <StethoscopeIcon className="mr-2" />
            <select className="outline-none w-full bg-transparent">
              <option value="">التخصص</option>
              {[...new Set(categories.map((c) => c.name))].map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Location select */}
          <div className="flex items-center w-full h-14 md:h-16 p-4 border-t md:border-t-0 md:border-r border-gray-300">
            <LocationIcon className="mr-2" />
            <select className="outline-none w-full bg-transparent">
              <option value="">الموقع</option>
              {municipals &&
                municipals.length > 0 &&
                municipals.map((municipal) => (
                  <option key={municipal.id} value={municipal.municipal_name}>
                    {municipal.municipal_name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="w-full md:flex-[2]">
          <Button
            text="ابحث"
            variant="secondary"
            size="large"
            className="h-14 md:h-16 w-full rounded-b-lg md:rounded-bl-lg md:rounded-tr-lg md:rounded-br-lg"
            Icon={SearchIcon}
            rounded={false}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchDiv;
