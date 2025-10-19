import Image from "next/image";
import FullStarIcon from "./icons/FullStarIcon";
import GrayStarIcon from "./icons/GrayStarIcon";

function ClientOpinion({ userName, userPicture, createdAt, qualityRate }) {
  const rating = Number(qualityRate) || 0;
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "غير محدد";

  return (
    <div className="flex items-start gap-4">
      <Image
        src={userPicture || "/images/unknown-user.png"}
        alt={userName || "مستخدم"}
        className="w-12 h-12 object-cover rounded-full flex-shrink-0"
        width={48}
        height={48}
      />
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-[#090D12]">
            {userName || "مستخدم"}
          </span>
          <span className="text-xs text-[#B7BABE]">{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          {stars.map((filled, i) =>
            filled ? <FullStarIcon key={i} /> : <GrayStarIcon key={i} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientOpinion;
