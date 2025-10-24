import Image from "next/image";
import SearchDiv from "./SearchDiv";

function Hero() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4">
      <div className="w-full max-w-[1223px]">
        <div className="relative bg-[linear-gradient(to_left,_#6000D6,_#B0B9BC)] rounded-2xl lg:overflow-visible overflow-hidden px-6 py-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Background waves */}
          <Image
            src="/images/waves.png"
            alt="waves"
            fill
            className="object-cover absolute inset-0 z-0"
            priority
          />
          {/* Hero illustration */}
          <Image
            src="/images/hero-Image.png"
            width={451}
            height={400}
            alt="hero illustration"
            className="relative lg:absolute lg:bottom-0 lg:-left-12"
            priority
          />
          {/* Text */}
          <div className="relative z-20 flex flex-col gap-6 text-white w-full lg:w-[562px] text-center lg:text-right">
            <p className="mt-4 text-lg">مرحبا</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-snug">
              حجز مواعيد طبية بسهولة، متى وأينما كنت!
            </h1>
            <p className="mt-4 text-base md:text-lg">
              ابحث عن أفضل الأطباء والعيادات بالقرب منك.
            </p>

            {/* Search */}
            <div className="mt-6 text-black">
              <SearchDiv />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
