import { useEffect, useMemo, useState } from "react";
import CheckBoxList from "./CheckBoxList";
import ArrowIcon from "./icons/ArrowIcon";
import SearchIcon from "./icons/SearchIcon";

export default function FilterCard({
  title,
  placeholder,
  initialItems,
  onChange = () => {},
  labelKey = "name", // 👈 default: categories use "name"
}) {
  // ✅ Normalize data once when initialItems changes
  const normalized = useMemo(() => {
    return (initialItems || []).map((i) => ({
      ...i,
      checked: i.checked ?? false,
    }));
  }, [initialItems]);

  // ✅ Initialize items once
  const [items, setItems] = useState(normalized);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // ✅ Update state only if normalized actually changed
  useEffect(() => {
    setItems((prev) => {
      const sameLength = prev.length === normalized.length;
      const sameIds =
        sameLength && prev.every((p, i) => p.id === normalized[i].id);
      return sameIds ? prev : normalized;
    });
  }, [normalized]);

  // ✅ Filter search
  const filtered = useMemo(() => {
    return items.filter((item) =>
      item[labelKey]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm, labelKey]);

  const visible = showAll ? filtered : filtered.slice(0, 3);

  const handleCheckboxChange = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  // ✅ Trigger onChange only when selected items change
  useEffect(() => {
    const selected = items.filter((i) => i.checked).map((i) => i[labelKey]);
    onChange(selected);
  }, [items, onChange, labelKey]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm p-4 flex flex-col border-b border-[#B7BABE] my-4 gap-4">
        {/* Header */}
        <div className="flex justify-between items-center text-gray-800">
          <h2 className="text-base font-medium">{title}</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            <ArrowIcon
              className={`h-6 w-6 text-[#B7BABE] transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <>
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                <SearchIcon
                  className="h-5 w-5 text-gray-900"
                  textColor="#B7BABE"
                />
              </div>
              <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-8 py-3 rounded-xl border border-[#B7BABE] focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>

            {/* Items */}
            <div className="flex flex-col space-y-4">
              {visible.map((item) => (
                <CheckBoxList
                  key={item.id}
                  item={{ ...item, label: item[labelKey] }}
                  onCheckboxChange={() => handleCheckboxChange(item.id)}
                />
              ))}
            </div>

            {/* Show More */}
            {filtered.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium text-right"
              >
                {showAll ? "عرض اقل" : "عرض المزيد"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
