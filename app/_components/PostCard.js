import React from "react";
import Image from "next/image";
import WorldIcon from "./icons/WorldIcon";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";
import PurpleArrow from "./icons/PurpleArrow";
import GrayArrow from "./icons/GrayArrow";
import CommentsIcon from "./icons/CommentsIcon";
import ShareIcon from "./icons/ShareIcon";

// Helper function to calculate relative time (e.g., "5 hours ago")
const formatPostTime = (timestamp) => {
  // timestamp format: "2025-07-23 01:41:31"
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

function PostCard({
  id,
  username, // اسم العيادة
  user_picture, // شعار العيادة
  publish_time, // وقت النشر
  post_content, // محتوى المنشور
  post_image, // صورة المنشور
  comments_num, // عدد التعليقات
  likes_num, // عدد الإعجابات
  dislikes_num, // عدد عدم الإعجاب
  ...rest // Catch all other props passed by {...post}
}) {
  const numberofUpvotes = (likes_num || 0) - (dislikes_num || 0);
  const formattedTime = formatPostTime(publish_time);

  // 💡 NEW LOGIC: Extract only the first line of content
  const firstLineContent = post_content
    ? post_content.trim().split("\n")[0]
    : ""; // Get the first line or an empty string

  const safePostImage =
    post_image || "https://placehold.co/420x200/cccccc/333333?text=Post+Image";
  const safeUserPicture =
    user_picture || "https://placehold.co/48x48/cccccc/333333?text=Logo";

  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      {/* Clinic/User Header */}
      <div className="flex justify-between p-4 pb-2">
        <div className="flex items-center gap-2">
          {/* Using <img> for logo to ensure compatibility with non-configured domains */}
          <Image
            src={safeUserPicture}
            alt={`${username} Logo`}
            width={48}
            height={48}
            className="object-cover rounded-full w-12 h-12"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{username}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span>{formattedTime}</span>
              <span className="rtl:mr-1">.</span>
              <WorldIcon className="w-4 h-4" />
            </p>
          </div>
        </div>
        <div>
          <ThreeDotsIcon className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4">
        <p className="text-sm text-gray-700 font-normal leading-relaxed overflow-hidden whitespace-nowrap text-ellipsis">
          {/* Displaying only the first line of content */}
          {firstLineContent}
        </p>
      </div>

      {/* Post Image */}
      {post_image && ( // عرض الصورة فقط إذا كان الرابط موجوداً
        <Image
          src={safePostImage}
          alt="Post Image"
          width={420}
          height={194}
          className="w-full object-cover h-[200px] mt-4"
        />
      )}

      {/* Actions (Likes/Comments/Share) */}
      <div className="p-4">
        <div className="flex items-center justify-between border-t border-[#E4E4E4] pt-4">
          {/* Likes/Dislikes & Comments */}
          <div className="flex items-center gap-4">
            {/* Upvotes */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] rounded-full shadow-inner border border-[#E4E4E4] hover:bg-[#E9E9E9] transition-colors cursor-pointer">
              <PurpleArrow className="w-4 h-4" />
              <p className="text-sm text-gray-800 font-medium">
                {numberofUpvotes > 0 ? `+${numberofUpvotes}` : numberofUpvotes}
              </p>
              <GrayArrow className="w-4 h-4" />
            </div>
            {/* Comments */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] rounded-full hover:bg-[#E9E9E9] transition-colors cursor-pointer">
              <CommentsIcon className="w-4 h-4 text-gray-600" />
              <p className="text-xs font-medium text-gray-700">
                {comments_num || 0} تعليق
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] rounded-full hover:bg-[#E9E9E9] transition-colors cursor-pointer">
            <ShareIcon className="w-4 h-4 text-gray-600" />
            <p className="text-xs font-medium text-gray-700">مشاركة</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
