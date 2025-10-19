import { useState, useRef, useEffect } from "react";
import ArrowIcon from "./icons/ArrowIcon";
import CloseIcon from "./icons/CloseIcon";
import MeesageWithThreeIcon from "./icons/MeesageWithThreeIcon";
import TelegramIcon from "./icons/TelegramIcon";
import BigInstagramIcon from "./icons/BigInstagramIcon";
import ShareAltIcon from "./icons/ShareAltIcon";

function ShareComponent() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef(null);

  // Handle copy to clipboard
  const handleCopy = async () => {
    try {
      const url = "https://meet.google.com/hwh-nysf-wcn"; // Your URL
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setIsShareOpen(false);
      }
    }

    if (isShareOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isShareOpen]);

  return (
    <div className="flex items-center gap-4 " ref={shareRef}>
      <span
        onClick={() => setIsShareOpen(!isShareOpen)}
        className="cursor-pointer"
      >
        <ShareAltIcon />
      </span>
      {isShareOpen && (
        <div className="flex flex-col items-center gap-4 p-2 md:p-4 bg-[#F9F9F9] rounded-lg absolute top-[100px] left-[35%] mt-2 min-w-[250px] md:w-[400px] z-50 shadow-lg">
          <div className="flex flex-col md:flex-row items-center w-full px-4 justify-between gap-4">
            <div className="flex items-center gap-4 border-b pb-2 border-b-gray-200">
              <BigInstagramIcon
                BackgroundColor={"#6000D6"}
                iconColor={"white"}
              />
              <TelegramIcon iconColor={"white"} />
              <MeesageWithThreeIcon />
            </div>
            <div>
              <CloseIcon onClick={() => setIsShareOpen(false)} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row bg-[#EDEDED] rounded-lg">
              <p className="text-sm overflow-hidden w-[180px] md:w-[250px] lg:w-[250px] text-ellipsis whitespace-nowrap p-2 md:p-4">
                https://meet.google.com/hwh-nysf-wcn
              </p>
              <div 
                onClick={handleCopy}
                className="flex items-center justify-center w-[123px] text-white text-sm cursor-pointer rounded-xl bg-accent-500"
              >
                <p>{copied ? 'تم النسخ' : 'نسخ الرابط'}</p>
                <ArrowIcon direction="left" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareComponent;