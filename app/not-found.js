"use client";
// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simplified Header for 404 */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* Your logo */}
            <div className="w-8 h-8 bg-[#6000D6] rounded-lg"></div>
            <span className="text-xl font-bold text-[#161F2C]">طبيبك</span>
          </Link>

          <Link
            href="/"
            className="text-[#6000D6] hover:text-[#4800A5] font-medium"
          >
            الصفحة الرئيسية
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          {/* 404 Illustration */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="text-6xl font-bold text-gray-300">404</div>
          </div>

          {/* 404 Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#161F2C] mb-4">
            الصفحة غير موجودة
          </h1>

          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
            يمكنك العودة للصفحة الرئيسية أو البحث عن ما تحتاجه.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full px-6 py-3 bg-[#6000D6] hover:bg-[#4800A5] text-white rounded-lg font-medium transition-colors duration-200 text-center"
            >
              العودة للصفحة الرئيسية
            </Link>

            <Link
              href="/doctors"
              className="block w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200 text-center"
            >
              تصفح الأطباء
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full px-6 py-3 bord
              er border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors duration-200"
            >
              العودة للصفحة السابقة
            </button>
          </div>

          {/* Popular Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#161F2C] mb-4">
              روابط مفيدة
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link
                href="/doctors"
                className="text-[#6000D6] hover:text-[#4800A5] hover:underline"
              >
                جميع الأطباء
              </Link>
              <Link
                href="/account"
                className="text-[#6000D6] hover:text-[#4800A5] hover:underline"
              >
                حسابي
              </Link>
              <Link
                href="/about"
                className="text-[#6000D6] hover:text-[#4800A5] hover:underline"
              >
                عن الموقع
              </Link>
              <Link
                href="/contact"
                className="text-[#6000D6] hover:text-[#4800A5] hover:underline"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 px-4 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 طبيبك. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
