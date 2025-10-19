  "use client";
  import Button from "./Button";
  import EditProfileIcon from "./icons/EditProfileIcon";

  function ProfileDetails({ profile, onEdit }) {
    return (
      <>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl text-[#161F2C]">
            معلومات الحساب الشخصي
          </p>
          <Button
            text="تعديل المعلومات"
            variant="noBorder"
            className="text-[#161F2C]"
            Icon={EditProfileIcon}
            iconPosition="left"
            onClick={onEdit}
          />
        </div>

        <div className="flex flex-col px-8 py-3 gap-4 text-[#161F2C]">
          <div className="flex items-center justify-start gap-4 mt-4">
            <div className="flex items-center gap-4 w-1/2">
              <p className="w-1/3">الاسم:</p>
              <p className="text-[#636972]">{profile.firstName}</p>
            </div>
            <div className="flex items-center gap-4 w-1/2">
              <p className="w-1/3">اللقب:</p>
              <p className="text-[#636972]">{profile.lastName}</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 mt-4">
            <div className="flex items-center gap-4 w-1/2">
              <p className="w-1/3">الرقم الوطني:</p>
              <p className="text-[#636972]">{profile.nationalNumber}</p>
            </div>
            <div className="flex items-center gap-4 w-1/2">
              <p className="w-1/3">تاریخ الميلاد:</p>
              <p className="text-[#636972]">{profile.birthday || ""}</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 mt-4">
            <div className="flex items-center gap-4 w-1/2">
              <p className="w-1/3">الجنس:</p>
              <p className="text-[#636972]">{profile.gender}</p>
            </div>
            <div className="flex items-center gap-4 w-1/2">
              <p className="w-1/3">التأمين المشمول:</p>
              <p className="text-[#636972]">{profile.insuranceType}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default ProfileDetails;
