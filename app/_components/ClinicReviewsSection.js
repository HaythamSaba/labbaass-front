"use client";

import { useQuery } from "@tanstack/react-query";
import ClientOpinion from "./ClientOpinion";
import SadFaceIcon from "./icons/SadFaceIcon";
import SmileIcon from "./icons/SmileIcon";
import ClockIcon from "./icons/ClockIcon";
import FullStarIcon from "./icons/FullStarIcon";
import GrayStarIcon from "./icons/GrayStarIcon";
import { getClinicRatings } from "../_lib/api";
import { useMemo } from "react";
// ✅ Helper function to convert rating to waiting time
function calculateWaitingTime(respectTimeRate) {
  const rating = Number(respectTimeRate) || 1;
  const waitingMinutes = (6 - rating) * 12;
  return Math.max(5, waitingMinutes);
}

// ✅ Helper function to get waiting time label
function getWaitingTimeLabel(minutes) {
  if (minutes <= 15) return { text: "قصير جداً", color: "text-green-600" };
  if (minutes <= 30) return { text: "مقبول", color: "text-blue-600" };
  if (minutes <= 45) return { text: "متوسط", color: "text-yellow-600" };
  return { text: "طويل", color: "text-red-600" };
}

// ✅ Determine recommendation based on average rating
function getRecommendation(averageRating) {
  if (averageRating >= 3.5) {
    return {
      text: "أنصح بهذا الطبيب",
      icon: <SmileIcon />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    };
  } else {
    return {
      text: "لا أوصي بهذا الطبيب",
      icon: <SadFaceIcon />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    };
  }
}

function ClinicReviewsSection({ pharmId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["clinicRatings", pharmId],
    queryFn: () => getClinicRatings(pharmId),
    enabled: !!pharmId,
    staleTime: 2 * 60 * 1000,
  });

  const ratings = data?.ratings || [];
  const total = data?.total || 0;

  // ✅ Calculate metrics for each review
  const reviewsWithMetrics = useMemo(() => {
    return ratings.map((review) => {
      const receptionRate = Number(review.reception_rate) || 0;
      const cleanlinessRate = Number(review.cleanliness_rate) || 0;
      const respectTimeRate = Number(review.respect_time_rate) || 0;
      const qualityRate = Number(review.quality_rate) || 0;

      const avg =
        (receptionRate + cleanlinessRate + respectTimeRate + qualityRate) / 4;
      const waitingMinutes = calculateWaitingTime(respectTimeRate);
      const recommendation = getRecommendation(avg);

      return {
        ...review,
        averageRating: Math.round(avg),
        actualAverage: avg,
        waitingMinutes,
        recommendation,
      };
    });
  }, [ratings]);

  // ✅ Calculate overall clinic recommendation percentage
  const overallRecommendation = useMemo(() => {
    if (reviewsWithMetrics.length === 0) return null;

    const recommendCount = reviewsWithMetrics.filter(
      (review) => review.recommendation.icon === "thumbs-up"
    ).length;

    const percentage = Math.round(
      (recommendCount / reviewsWithMetrics.length) * 100
    );

    return {
      percentage,
      count: recommendCount,
      total: reviewsWithMetrics.length,
    };
  }, [reviewsWithMetrics]);

  // ✅ Loading state
  if (isLoading) {
    return (
      <p className="text-center text-gray-500 mt-4">جارٍ تحميل الآراء...</p>
    );
  }

  // ✅ Error state
  if (error) {
    return (
      <div className="text-center mt-4">
        <p className="text-red-500 mb-2">حدث خطأ أثناء تحميل التقييمات ❌</p>
        <p className="text-sm text-gray-500">{error.message}</p>
      </div>
    );
  }

  // ✅ Empty state
  if (!reviewsWithMetrics.length) {
    return (
      <p className="text-center text-gray-600 mt-4">
        لا توجد تقييمات بعد لهذه العيادة
      </p>
    );
  }

  return (
    <div className="mt-10">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
        <p className="text-[#090D12] font-semibold text-lg">الآراء</p>
        <div className="flex items-center gap-4">
          <p className="text-[#B7BABE] text-sm">{total} تقييمًا</p>
        </div>
      </div>

      {/* ===== Reviews List ===== */}
      {}
      <div className="space-y-6">
        {reviewsWithMetrics.map((review) => {
          const waitingLabel = getWaitingTimeLabel(review.waitingMinutes);
          const rec = review.recommendation;

          return (
            <div
              key={review.id}
              className="border-b border-[#E4E4E4] p-4 bg-white "
            >
              {/* User Info & Stars */}
              <ClientOpinion
                userName={review.userName}
                userPicture={review.userPicture}
                createdAt={review.created_at}
                qualityRate={review.averageRating}
              />
              <div className="flex flex-col mt-2 gap-4">
                {
                  <div className={`flex items-center gap-2 mt-4`}>
                    <span className="text-xl">{rec.icon}</span>
                    <span className={`text-sm `}>{rec.text}</span>
                  </div>
                }
                {
                  <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span className="text-sm">
                      زمن انتظار {review.waitingMinutes} دقیقه
                    </span>
                  </div>
                }
              </div>

              {/* Comment */}
              {review.comment && (
                <p className="mt-4 text-[#090D12] leading-relaxed font-normal p-3 rounded-lg text-sm">
                  {review.comment}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClinicReviewsSection;
