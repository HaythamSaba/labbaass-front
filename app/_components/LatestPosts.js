"use client";
import PostCard from "./PostCard";
import SectionHeader from "./SectionHeader";
import { getPosts } from "../_lib/api";
import { useEffect, useState } from "react";

function LatestPosts() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((res) => {
        // 🚀 FIX 1: Safely check if the data is nested under 'data' or is the response itself.
        // We assume it's under 'data' or is an array.
        const postsArray = Array.isArray(res) ? res : res.data || [];
        setLatestPosts(postsArray);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // 🚀 FIX 2: Add empty dependency array to run only once

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

  // Check if there are no posts after loading
  if (latestPosts.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 mt-10">
        لا توجد منشورات متاحة حاليًا.
      </div>
    );
  }

  return (
    <div className="border-b border-[#E5E7EB] py-8 template">
      <SectionHeader
        subtext="المنشورات"
        title="آخر المنشورات"
        linkHref="/posts"
        linkText="مشاهدة المزيد"
      />
      <div
        className="flex overflow-x-auto gap-4 md:gap-8 pb-4 mt-20 scrollbar-hide"
        dir="ltr"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}
      >
        {/* Using global styles for scrollbar-hide in JSX context */}
        <style global jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>

        {latestPosts.map((post, index) => (
          <div key={index} className="flex-none w-[420px]" dir="rtl">
            {/* Ensure PostCard is expecting props like: title, content, image, etc. */}
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestPosts;
