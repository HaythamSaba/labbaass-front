"use client";
import PostCard from "../_components/PostCard";
import Breadcrumb from "../_components/Breadcrumb";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPosts } from "../_lib/api"; // Assuming this path and function exist

// Helper function to calculate relative time (copied from PostCard for consistency)
const formatPostTime = (timestamp) => {
  // timestamp format: "2025-07-23 01:41:31"
  if (!timestamp) return "---";
  const postDate = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now - postDate) / 1000);

  if (diffInSeconds < 60) return "منذ ثوانٍ";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `منذ ${diffInMinutes} دقيقة`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `منذ ${diffInHours} ساعة`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `منذ ${diffInDays} أيام`;

  // Fallback to day/month format
  return postDate.toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "short",
  });
};

function AllPostsPage() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((res) => {
        // Safely check if the data is nested under 'data' or is the response itself.
        const postsArray = Array.isArray(res) ? res : res.data || [];
        setLatestPosts(postsArray);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // Run only once on mount

  // Removed console.log for cleaner code

  if (loading)
    return (
      <div className="p-4 template text-center text-gray-500">
        جاري تحميل المنشورات...
      </div>
    );
  if (error)
    return (
      <div className="p-4 text-red-500 template text-center">
        خطأ في التحميل: {error}
      </div>
    );

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "جميع المنشورات" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="template mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161F2C] mb-2">
            جميع المنشورات
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            تصفح جميع المنشورات والأخبار الطبية ({latestPosts.length} منشور)
          </p>
        </div>

        {/* No Posts Message */}
        {latestPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا توجد منشورات متاحة
            </h3>
            <p className="text-gray-500 mb-4">
              لم يتم نشر أي محتوى بعد. تحقق مرة أخرى لاحقاً
            </p>
          </div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-8">
              {latestPosts.map((post, index) => (
                <div key={post.id || index} className="w-full">
                  {/* Spreading all post properties correctly */}
                  <PostCard {...post} />
                </div>
              ))}
            </div>

            {/* Posts Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-[#E4E4E4] p-6 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-[#6000D6] mb-1">
                    {latestPosts.length}
                  </div>
                  <div className="text-sm text-gray-600">إجمالي المنشورات</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-[#6000D6] mb-1">
                    {/* FIXED: Using real data field: comments_num */}
                    {latestPosts.reduce(
                      (total, post) => total + (post.comments_num || 0),
                      0
                    )}
                  </div>
                  <div className="text-sm text-gray-600">إجمالي التعليقات</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-[#6000D6] mb-1">
                    {/* FIXED: Using real data field: likes_num */}
                    {latestPosts.reduce(
                      (total, post) => total + (post.likes_num || 0),
                      0
                    )}
                  </div>
                  <div className="text-sm text-gray-600">إجمالي الإعجابات</div>
                </div>
              </div>
            </div>

            {/* Recent Posts Timeline */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#161F2C] mb-6">
                آخر المنشورات
              </h2>
              <div className="space-y-4">
                {latestPosts.map((post, index) => (
                  console.log(post.post_content),
                  <div
                    key={post.id || index}
                    className="bg-white rounded-lg shadow-sm border border-[#E4E4E4] p-4 flex items-start gap-4 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* FIXED: Using real data field: user_picture */}
                    <Image
                      src={
                        post.user_picture ||
                        "https://placehold.co/48x48/cccccc/333333?text=Logo"
                      }
                      width={48}
                      height={48}
                      // FIXED: Using real data field: username
                      alt={post.username}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        {/* FIXED: Using real data field: username */}
                        <h3 className="font-semibold text-[#161F2C] truncate">
                          {post.username}
                        </h3>
                        <span className="text-xs text-gray-500 flex-shrink-0 mr-2">
                          {/* FIXED: Using real data field: publish_time with formatter */}
                          {formatPostTime(post.publish_time)}
                        </span>
                      </div>
                      {/* FIXED: Using real data field: post_content */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.post_content}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        {/* FIXED: Using real data field: comments_num */}
                        <span>{post.comments_num || 0} تعليق</span>
                        {/* FIXED: Using real data field: likes_num */}
                        <span>{post.likes_num || 0} إعجاب</span>
                        <span>
                          {/* FIXED: Using real data fields: likes_num and dislikes_num */}
                          {(post.likes_num || 0) - (post.dislikes_num || 0)} صوت
                        </span>
                      </div>
                    </div>
                    {/* FIXED: Using real data field: post_image */}
                    {post.post_image && (
                      <Image
                        src={post.post_image}
                        width={420}
                        height={194}
                        alt="Post preview"
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#6000D6] to-[#4800A5] rounded-lg shadow-lg p-8 mt-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">ابق على اطلاع دائم</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            تابع آخر المنشورات والأخبار الطبية من أفضل العيادات والمراكز الطبية
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-white text-[#6000D6] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              اشترك في النشرة الإخبارية
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#6000D6] transition-colors duration-200">
              تصفح الأطباء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPostsPage;
