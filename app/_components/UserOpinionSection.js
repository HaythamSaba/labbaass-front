"use client";
import { useRouter } from "next/navigation";
import AddOpinionModal from "./AddOpinionModal";
import Button from "./Button";
import toast from "react-hot-toast";

function UserOpinionSection({ isModalOpen, setIsModalOpen, session }) {
  const router = useRouter();
  const handleClickModal = () => {
    if (!session) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-primary-200 shadow-lg rounded-xl pointer-events-auto flex flex-col p-4 `}
        >
          <p className="text-sm text-gray-700 mb-3">
            يجب تسجيل الدخول لإضافة رأي
          </p>
          <Button
            text="تسجيل الدخول"
            variant="primary"
            size="small"
            rounded
            fullWidth
            onClick={() => {
              toast.dismiss(t.id);
              router.push("/api/auth/signin"); // NextAuth login route
            }}
          />
        </div>
      ));
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="m-auto flex justify-center my-8">
        <button
          className="py-3 font-medium text-base px-34 bg-accent-600 rounded-lg text-white"
          onClick={() => handleClickModal()}
        >
          إضافة تعليق
        </button>
      </div>
      {isModalOpen && <AddOpinionModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default UserOpinionSection;
