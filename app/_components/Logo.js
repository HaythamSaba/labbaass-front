"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {

  return (
    <Link className="flex items-center justify-center" href="/">
      <Image
        src="/images/main-logo.png"
        width={170}
        height={60}
        alt="logo"
        quality={100}
      />
    </Link>
  );
}
