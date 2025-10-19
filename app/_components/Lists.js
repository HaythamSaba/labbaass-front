"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Lists({ className }) {
  const pathname = usePathname();

  const navItems = [
    { item: "الرئيسية", href: "/" },
    { item: "العيادات", href: "/clinics" },
    { item: "المنشورات", href: "/posts" },
    { item: "تواصل معنا", href: "/contact-us" },
  ];

  return (
    <ul className={`flex gap-x-8 gap-y-2 ${className}`}>
      {navItems.map((navItem) => {
        const isActive = pathname === navItem.href;

        return (
          <li key={navItem.item}>
            <Link
              href={navItem.href}
              className={`hover:text-primary transition-colors ${
                isActive
                  ? "text-[#161F2C]" // Active styles
                  : "text-[#636972]"
              }`}
            >
              {navItem.item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Lists;
