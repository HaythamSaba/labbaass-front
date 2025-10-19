import Link from "next/link";
import ArrowIcon from "./icons/ArrowIcon";
// import { ChevronLeftIcon } from "@heroicons/react/24/outline"; // or your custom icon

function Breadcrumb({ items }) {
  return (
    <nav
      className="flex items-center space-x-2 text-sm text-gray-600 mb-4"
      dir="rtl"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {/* Breadcrumb item */}
          {item.href && index !== items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-[#6000D6] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className={index === items.length - 1 ? "text-gray-400" : ""}>
              {item.label}
            </span>
          )}

          {/* Separator (only if not the last item) */}
          {index !== items.length - 1 && (
            <span className="mx-2 text-gray-400 font-[20px] ">
              <ArrowIcon direction="left"/>
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;
