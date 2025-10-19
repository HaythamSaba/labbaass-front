import { toast } from "react-hot-toast";
import CheckIcon from "./icons/CheckIcon";
import CloseIcon from "./icons/CloseIcon";
import SuccessfulIcon from "./icons/SuccessfulIcon";

// Custom success toast
export const showSuccessToast = (message) => {
  toast.custom(
    (t) => (
      <div
        className={`relative flex items-center justify-center gap-4 w-full p-4 rounded-lg shadow-md transition-all max-w-[300px]
        ${t.visible ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "#fff",
          color: "#2FA766",
        }}
      >
        <span className="flex items-center gap-3 font-bold text-base">
          <SuccessfulIcon /> {message}
        </span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="p-1 rounded hover:bg-gray-100 transition-colors absolute top-2 left-2 text-[#878787]"
        >
          <CloseIcon />
        </button>
      </div>
    ),
    {
      duration: Infinity,
      position: "top-center",
    }
  );
};
