// app/loading.js
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Loading Header Skeleton */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6000D6] rounded-lg animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Loading Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center">
          {/* Spinning Icon */}
          <div className="w-16 h-16 mx-auto mb-6">
            <div className="w-16 h-16 border-4 border-[#6000D6] border-t-transparent rounded-full animate-spin"></div>
          </div>

          {/* Loading Text */}
          <h2 className="text-xl font-semibold text-[#161F2C] mb-2">
            جاري التحميل...
          </h2>
          <p className="text-gray-600 text-sm">
            الرجاء الانتظار بينما نحضر المحتوى لك
          </p>

          {/* Loading Progress Dots */}
          <div className="flex justify-center mt-6 space-x-1 space-x-reverse">
            <div className="w-2 h-2 bg-[#6000D6] rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-[#6000D6] rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#6000D6] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Optional: Content Skeleton */}
        <div className="w-full max-w-4xl mt-12 space-y-6">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto animate-pulse"></div>

          {/* Card Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse"
              >
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                </div>
                <div className="mt-4 h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Loading Footer Skeleton */}
      <footer className="bg-gray-50 border-t border-gray-200 px-4 py-6">
        <div className="container mx-auto">
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
}

// Alternative: Simple Loading Component
export function SimpleLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 border-4 border-[#6000D6] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600">جاري التحميل...</p>
      </div>
    </div>
  );
}

// Alternative: Medical Theme Loading
export function MedicalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        {/* Medical Cross Animation */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-12 bg-[#6000D6] rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center rotate-90">
            <div
              className="w-4 h-12 bg-[#6000D6] rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#161F2C] mb-2">
          نحضر لك أفضل الأطباء
        </h3>
        <p className="text-gray-600 text-sm">جاري تحميل المعلومات الطبية...</p>

        {/* Heartbeat Animation */}
        <div className="mt-6">
          <div className="flex justify-center items-center space-x-1 space-x-reverse">
            <div className="w-1 h-4 bg-red-400 rounded animate-pulse"></div>
            <div
              className="w-1 h-8 bg-red-500 rounded animate-pulse"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-1 h-12 bg-red-600 rounded animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1 h-8 bg-red-500 rounded animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-1 h-4 bg-red-400 rounded animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
