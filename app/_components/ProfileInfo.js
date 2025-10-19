"use client";
import { useState, useEffect } from "react";
import EditProfileInfo from "./EditProfileInfo";
import ProfileDetails from "./ProfileDetails";

function ProfileInfo({ session }) {
  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState({
    firstName: session?.user?.name?.split(" ")[0] || "",
    lastName: session?.user?.name?.split(" ")[1] || "",
    phone: session?.user?.phone || "",
    nationalNumber: session?.user?.nationalNumber || "",
    insuranceType: session?.user?.insuranceType || "",
    birthday: session?.user?.birthday || "",
    gender: session?.user?.gender || "",
  });

  // ✅ Mark when component is hydrated
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Load profile only after hydration
  useEffect(() => {
    if (mounted) {
      const saved = localStorage.getItem("userProfile");
      if (saved) {
        setProfile(JSON.parse(saved));
      }
    }
  }, [mounted]);

  // ✅ Save profile changes to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
    }
  }, [profile, mounted]);

  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  // ✅ Avoid rendering mismatched markup before hydration
  if (!mounted) return null;

  return (
    <div className="flex-1 px-4 py-6 border border-[#E4E4E4] rounded-2xl min-h-[265px]">
      {isEditing ? (
        <EditProfileInfo
          profile={profile}
          onCancel={() => setIsEditing(false)}
          onSave={handleSave}
        />
      ) : (
        <ProfileDetails profile={profile} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}

export default ProfileInfo;
