"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import LoginIcon from "./icons/LoginIcon";
import PersonOutlineIcon from "./icons/PersonOutlineIcon";
import Link from "next/link";

// Inline SVG icons
function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8h16M4 16h16"
      />
    </svg>
  );
}

export default function ClientHeader({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState(session?.user?.name || "");

  useEffect(() => {
    // Run only in browser
    if (typeof window !== "undefined") {
      const savedProfile = localStorage.getItem("userProfile");
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        // Construct full name if available
        const fullName = [parsed.firstName, parsed.lastName]
          .filter(Boolean)
          .join(" ");
        if (fullName) setUserName(fullName);
      }
    }
  }, []);

  return (
    <header className="border-b border-[#E5E7EB]">
      <nav className="flex justify-between items-center h-[100px] px-4 md:px-8 template">
        {/* Desktop: Logo + Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-32">
          <Logo />
          <Navigation />
        </div>
        {/* Desktop: Login Button */}
        <div className="hidden lg:block">
          {session?.user?.name ? (
            <div className="flex items-center gap-4">
              <Link href="/add-clinic">
                <Button
                  text="اضافة عيادة"
                  variant="secondary"
                  size="medium"
                  rounded
                />
              </Link>
              <Link href="/account">
                <Button
                  text={userName}
                  Icon={PersonOutlineIcon}
                  variant="whiteWithBorder"
                  size="medium"
                  iconPosition="right"
                  rounded
                />
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <Button
                text="تسجيل الدخول"
                Icon={LoginIcon}
                variant="primary"
                size="medium"
                iconPosition="right"
                rounded
              />
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-4 py-4 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-4">
            <Logo />
            <Navigation />
            {session?.user?.name ? (
              <div className="flex justify-between items-center gap-2">
                <Link href="/add-clinic">
                  <Button
                    text="اضافة عيادة"
                    variant="secondary"
                    size="medium"
                    rounded
                  />
                </Link>
                <Link href="/account">
                  <Button
                    text={session?.user?.name}
                    Icon={PersonOutlineIcon}
                    variant="whiteWithBorder"
                    size="medium"
                    iconPosition="right"
                    rounded
                  />
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <Button
                  text="تسجيل الدخول"
                  Icon={LoginIcon}
                  variant="primary"
                  size="medium"
                  iconPosition="right"
                  rounded
                />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
