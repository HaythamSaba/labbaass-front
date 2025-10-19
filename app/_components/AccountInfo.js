"use client";
import { useState } from "react";
import MyAppointments from "./MyAppointments";
import MyComments from "./MyComments";
import MyDoctors from "./MyDoctors";
import ProfileInfo from "./ProfileInfo";
import AccountNavigation from "./AccountNavigation";
import ProfilePage from "./ProfilePage";

function AccountInfo({ session }) {
  const [activeItem, setActiveItem] = useState("profile");
  const [isNavOpen, setIsNavOpen] = useState(false); // State to handle mobile nav visibility

  // Function to render the correct component based on the active state
  const renderContent = () => {
    switch (activeItem) {
      case "profile":
        return <ProfileInfo session={session} />; // Pass session as prop
      case "appointments":
        return <MyAppointments session={session} />;
      case "comments":
        return <MyComments />;
      case "doctors":
        return <MyDoctors />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    // On small screens, the layout is a column. On medium screens and up, it becomes a row.
    <div className="flex flex-col lg:flex-row items-start gap-4 mt-10">
      {/* Mobile-only toggle button for the navigation */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="lg:hidden w-full py-3 px-4 mb-4 text-left font-medium text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-600"
      >
        {isNavOpen ? "إخفاء القائمة" : "فتح قائمة التنقل"}
      </button>

      {/* Account Navigation */}
      {/* On small screens, hide the navigation unless isNavOpen is true. On medium screens, always show it. */}
      <div
        className={`w-full lg:w-auto ${
          isNavOpen ? "block" : "hidden"
        } lg:block transition-all duration-300`}
      >
        <AccountNavigation
          activeItem={activeItem}
          setActiveItem={(item) => {
            setActiveItem(item);
            setIsNavOpen(false); // Close nav on item click
          }}
        />
      </div>

      {/* Main content area, takes up remaining space */}
      <div className="flex-1 w-full min-h-[256px]">{renderContent()}</div>
    </div>
  );
}

export default AccountInfo;
