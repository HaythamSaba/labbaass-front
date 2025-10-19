"use client";
import { useState, useEffect } from "react";
import { useData } from "@/context/DataContext";
import CloseIcon from "./icons/CloseIcon";
import ThumbUpIcon from "./icons/ThumbUpIcon";

export default function AddOpinionModal({ onClose }) {
  const { addOpinion } = useData();
  const [comment, setComment] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [agree, setAgree] = useState(false);
  const [recommended, setRecommended] = useState(null); // null = no selection, true = recommend, false = not recommend

  const finalCheck = agree || anonymous;
  console.log(finalCheck);
  const questions = [
    { id: "q1", text: "سلوك الطبيب المهني (التعامل بصبر واحترام)" },
    { id: "q2", text: "تخصيص الوقت الكافي وتقديم الشروحات اللازمة للمراجع" },
    { id: "q3", text: "ظروف بيئة العيادة وغرفة الانتظار" },
    { id: "q4", text: "مهارة الطبيب في التشخيص والعلاج" },
    { id: "q5", text: "عملية الاستقبال وسلوك السكرتير والموظفين" },
  ];

  const ratingColors = {
    5: "#2FA766", // Green
    4: "#005FC6", // Blue
    3: "#FFBE00", // Yellow
    2: "#FF8500", // Orange
    1: "#E90000", // Red
  };

  const ratingNumbers = [5, 4, 3, 2, 1];

  const [ratings, setRatings] = useState(
    Object.fromEntries(questions.map((q) => [q.id, 0]))
  );

  // ✅ Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // ✅ Toggle rating (remove if clicked again)
  const handleRatingChange = (questionId, value) => {
    setRatings((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === value ? 0 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!finalCheck) return alert("يرجى الموافقة على الشروط والاحكام");
    addOpinion({ ratings }); // You can add name/comment fields later
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      onClick={onClose} // clicking background closes modal
    >
      {/* Modal (stops click propagation) */}
      <div
        className="bg-white rounded-lg shadow-lg w-[calc(900px-128px)] max-h-[90vh] py-4 px-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border border-[#EDEDED] p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 p-8 sticky top-0 bg-white z-10">
            <h2 className="text-lg font-bold">استطلاع الرأي</h2>
            <CloseIcon onClick={onClose} />
          </div>

          {/* Recommend or not */}
          <div className="flex justify-end gap-4 my-4">
            <button
              type="button"
              onClick={() => setRecommended(true)}
              className={`flex items-center gap-2 px-10 py-2 rounded border transition-colors ${
                recommended === true
                  ? "bg-[#2FA766] text-white border-[#2FA766]"
                  : "bg-white text-[#2FA766] border-[#2FA766]"
              }`}
            >
              أوصي به
              <ThumbUpIcon direction="up" color={recommended === true ? "#fff" : "#2FA766"} />
            </button>

            <button
              type="button"
              onClick={() => setRecommended(false)}
              className={`flex items-center gap-2 px-8 py-2 rounded border transition-colors ${
                recommended === false
                  ? "bg-[#E90000] text-white border-[#E90000]"
                  : "bg-white text-[#E90000] border-[#E90000]"
              }`}
            >
              لا أوصي به
              <ThumbUpIcon
                direction="down"
                color={recommended === false ? "#fff" : "#E90000"}
              />
            </button>
          </div>

          {/* Ratings */}
          <div className="text-lg mb-4 w-full bg-[#F9F9F9] p-8">
            كيف تقيم تجربتك مع الموعد الذي حجزته؟
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {questions.map((q) => (
              <div
                key={q.id}
                className="flex justify-between gap-4 my-8 p-4 border-b border-[#EDEDED]"
              >
                <p>{q.text}</p>
                <div className="flex gap-2">
                  {ratingNumbers.map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handleRatingChange(q.id, num)}
                      style={{
                        backgroundColor:
                          ratings[q.id] >= num ? ratingColors[num] : "#EDEDED",
                        color: ratings[q.id] >= num ? "white" : "#878787",
                      }}
                      className="rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-lg mb-4">اكتب سبب زيارتك وآرائك حول الطبيب</p>
              <p className="text-base text-gray-500">
                ستساعد ملاحظاتك المستخدمين الآخرين في اتخاذ قرار بشأن زيارة
                الطبيب.
              </p>
              <textarea
                className="w-full border border-[#EDEDED] rounded-lg p-4 mt-4 h-32"
                placeholder="اكتب هنا..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
              {/* Anonymous comment checkbox */}
              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setAnonymous(!anonymous)}
                  className={`w-5 h-5 rounded  flex items-center justify-center border-2  transition-colors ${
                    anonymous ? " border-[#007AFF]" : "border-[#C2C2C2]"
                  }`}
                >
                  {anonymous && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#007AFF"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.364 7.364a1 1 0 0 1-1.414 0L3.293 9.414a1 1 0 1 1 1.414-1.414l3.95 3.95 6.657-6.657a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <span
                  onClick={() => setAnonymous(!anonymous)}
                  className={`${
                    anonymous ? "text-[#007AFF]" : ""
                  } cursor-pointer`}
                >
                  التعليق كمجهول
                </span>
              </div>

              {/* Agree to rules checkbox */}
              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setAgree(!agree)}
                  className={`w-5 h-5 rounded  flex items-center justify-center border-2  transition-colors ${
                    agree ? " border-[#007AFF]" : "border-[#C2C2C2]"
                  }`}
                >
                  {agree && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#007AFF"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.364 7.364a1 1 0 0 1-1.414 0L3.293 9.414a1 1 0 1 1 1.414-1.414l3.95 3.95 6.657-6.657a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <span
                  className={`${agree ? "text-[#007AFF]" : ""} cursor-pointer`}
                  onClick={() => setAgree(!agree)}
                >
                  لقد قرأت ووافقت على قوانين تسجيل التعليقات في دكترلاین.
                </span>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className={`${
                  comment && finalCheck ? "bg-accent-500" : "bg-[#C2C2C2]"
                } text-white py-3 px-16 rounded-lg`}
              >
                إضافة تعليق
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
