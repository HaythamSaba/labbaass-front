"use client";

import Footer from "./_components/Footer";

function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simplified Header - No server dependencies */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto flex items-center justify-center">

          <button
            onClick={() => (window.location.href = "/")}
            className="text-[#6000D6] hover:text-[#4800A5] font-medium"
          >
            الصفحة الرئيسية
          </button>
        </div>
      </header>

      {/* Error Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#161F2C] mb-4">
            حدث خطأ ما أثناء تحميل الصفحة
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {error.message || "نعتذر عن هذا الخطأ. الرجاء المحاولة مرة أخرى."}
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => reset()}
              className="w-full px-6 py-3 bg-[#6000D6] hover:bg-[#4800A5] text-white rounded-lg font-medium transition-colors duration-200"
            >
              إعادة المحاولة
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>

          {/* Additional Info for Development */}
          {process.env.NODE_ENV === "development" && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                تفاصيل الخطأ (للمطورين فقط)
              </summary>
              <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-auto max-h-40">
                {error.stack}
              </pre>
            </details>
          )}
        </div>
      </main>

      {/* Simplified Footer */}
      <Footer />
    </div>
  );
}

export default Error;
