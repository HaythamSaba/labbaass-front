"use client";
import ClassificationList from "./ClassificationList";
import ClassificationIcon from "./icons/ClassificationIcon";

function Classification({
  active,
  onFilterChange,
  ClassificationName,
  classificationFilters,
  textColor,
  backgroundColor,
  itemCount // ✅ Receive count from parent
}) {
  return (
    <div className="border border-gray-200 rounded-3xl shadow-lg px-4 flex justify-between items-center gap-4 mb-4">
      <div className="flex items-center gap-4">
        <ClassificationIcon />
        <span className="font-medium text-xl text-[#161F2C]">
          {ClassificationName}
        </span>
        <ClassificationList
          active={active}
          filters={classificationFilters}
          textColor={textColor}
          backgroundColor={backgroundColor}
          onFilterChange={onFilterChange}
        />
      </div>
      <div>
        <span className="font-medium text-sm text-[#94989E]">
          {itemCount} عنصر
        </span>
      </div>
    </div>
  );
}

export default Classification;