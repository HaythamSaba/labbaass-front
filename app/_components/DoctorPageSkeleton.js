function DoctorPageSkeleton() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[72px] mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-white animate-pulse">
      {/* Main doctor info section skeleton */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 border border-[#DADADA] rounded-lg p-3 md:p-4">
        {/* Doctor image and stats skeleton */}
        <div className="flex flex-col w-full lg:w-auto">
          {/* Image skeleton */}
          <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[448px] h-[280px] sm:h-[320px] md:h-[350px] p-2 border border-[#EDEDED] rounded-lg flex justify-center items-center mx-auto lg:mx-0 bg-gray-100">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[317px] lg:h-[317px] rounded-full bg-gray-200"></div>
          </div>

          {/* Stats skeleton */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 mt-6 lg:mt-8">
            <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-2 sm:gap-4 lg:gap-4 text-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-2 sm:gap-4 lg:gap-4 text-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-32 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-2 sm:gap-4 lg:gap-4 text-center">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-28 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Doctor details and booking skeleton */}
        <div className="flex-1 flex flex-col lg:justify-between p-2 md:p-4 lg:p-8">
          <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-4">
            {/* Doctor info skeleton */}
            <div className="p-2 md:p-4 w-full xl:w-[250px]">
              {/* Name skeleton */}
              <div className="w-48 h-7 bg-gray-200 rounded mb-2"></div>
              {/* Specialty skeleton */}
              <div className="w-36 h-5 bg-gray-200 rounded mb-4"></div>
              {/* Share and heart icons skeleton */}
              <div className="flex items-center mt-4 gap-4 mb-4">
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
              </div>
              {/* Info lines skeleton */}
              <div className="border-b border-gray-200 p-2 md:p-4 mb-4">
                <div className="w-40 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="border-b border-gray-200 p-2 md:p-4 mb-4">
                <div className="w-32 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="p-2 md:p-4 mb-4">
                <div className="w-36 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Booking card skeleton */}
            <div className="p-3 md:p-4 border border-[#EDEDED] w-full xl:w-[394px] h-fit rounded-lg">
              {/* Title skeleton */}
              <div className="w-40 h-6 bg-gray-200 rounded mb-4"></div>
              {/* Location skeleton */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="w-48 h-4 bg-gray-200 rounded"></div>
              </div>
              {/* Available time skeleton */}
              <div className="flex justify-between items-center gap-2 mt-6 md:mt-8 mb-4">
                <div className="w-28 h-4 bg-gray-200 rounded"></div>
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </div>
              {/* Button skeleton */}
              <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* Specialties skeleton */}
          <div className="mt-6 lg:mt-0">
            <div className="w-20 h-6 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-wrap w-full max-w-[660px] gap-2">
              <div className="w-24 h-8 bg-gray-200 rounded-lg"></div>
              <div className="w-32 h-8 bg-gray-200 rounded-lg"></div>
              <div className="w-28 h-8 bg-gray-200 rounded-lg"></div>
              <div className="w-36 h-8 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor details and contact cards skeleton */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-6 lg:gap-2 my-6 md:my-12">
        {/* Description card skeleton */}
        <div className="w-full lg:w-1/2 p-3 md:p-4 rounded-xl bg-gray-100 min-h-[200px] md:h-[243px]">
          <div className="w-40 h-7 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Contact card skeleton */}
        <div className="w-full lg:w-1/2 p-3 md:p-4 rounded-xl bg-gray-100 min-h-[200px] md:h-[243px]">
          <div className="w-48 h-7 bg-gray-200 rounded mb-4"></div>
          {/* Contact items skeleton */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="w-56 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="w-32 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="w-44 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section headers skeleton */}
      <div className="mb-6">
        <div className="w-48 h-7 bg-gray-200 rounded"></div>
      </div>

      {/* Opinions carousel skeleton */}
      <div className="flex overflow-x-hidden gap-4 md:gap-8 pb-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-none w-[300px] h-[200px] bg-gray-100 rounded-lg p-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-16 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Similar doctors section skeleton */}
      <div className="mb-6">
        <div className="w-40 h-7 bg-gray-200 rounded"></div>
      </div>

      {/* Doctor cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-4 my-8 md:my-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-full max-w-[390px] mx-auto bg-gray-100 rounded-lg p-4 h-[352px]"
          >
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="space-y-3">
              <div className="w-32 h-5 bg-gray-200 rounded mx-auto"></div>
              <div className="w-24 h-4 bg-gray-200 rounded mx-auto"></div>
              <div className="w-40 h-4 bg-gray-200 rounded mx-auto"></div>
              <div className="w-full h-10 bg-gray-200 rounded mt-6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPageSkeleton;
