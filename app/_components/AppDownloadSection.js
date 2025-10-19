import Image from "next/image";
import React from "react";
import Link from "next/link";
import GooglePlay from "./icons/GooglePlay";
import AppStore from "./icons/AppStore";

const AppDownloadSection = () => {
  return (
    <div className="template mb-20 mt-20">
      <div className="flex flex-col md:flex-wrap w-full md:h-[480px] rounded-3xl bg-[#5A1AB7] p-8 text-white">
        {/* Text and QR Code */}
        <div className="md:grid md:grid-cols-2 md:grid-rows-[1fr_auto] flex flex-col lg:gap-x-6 lg:gap-y-8 gap-4 place-items-center">
          <div>
            <Image
              src="/images/download-app.png"
              alt="Download App"
              width={261}
              height={219}
            />
          </div>
          <div className="w-[283px] h-[283px] bg-white p-4 md:p-8 rounded-3xl mb-8">
            <Image
              src="/images/QrCode.png"
              alt="QR Code"
              width={226}
              height={226}
              className="w-full h-full object-contain"
              quality={100}
            />
          </div>
          <Link
            href="#"
            aria-label="Download on the App Store"
            className="bg-white px-[40px] pt-[13px] pb-2 rounded-xl h-fit flex items-center justify-center"
          >
            <AppStore />
          </Link>
          <Link
            href="#"
            aria-label="Download on the App Store"
            className="bg-white px-[40px] pt-[13px] pb-2 rounded-xl h-fit flex items-center justify-center"
          >
            <GooglePlay />
          </Link>
        </div>
        {/* // Mobile Phone Image */}
        <div className="lg:w-1/2 relative w-full md:w-1/2 flex mt-8 md:mt-0 m-auto">
          {/* The image is the element that will step out */}
          <Image
            src="/images/iPhone-12-Pro.png" // Path to your phone mockup image
            alt="Mobile app on a phone"
            width={303}
            height={614}
            quality={100}
            className="absolute hidden lg:block top-[-95px] left-[10px] lg:w-[420px] lg:h-[640px] w-auto h-auto md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
          />
          <div className="hidden lg:block absolute top-[35px] left-[-50px] z-9 w-[350px] h-[462px] rounded-bl-[112px] rounded-tl-3xl bg-[#FFAE00]"></div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
