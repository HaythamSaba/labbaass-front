"use client";
import MedicalInformationIcon from "@/app/_components/icons/MedicalInformationIcon";
import PaymentIcon from "@/app/_components/icons/PaymentIcon";
import RecieptIcon from "@/app/_components/icons/RecieptIcon";
import SelectingDateIcon from "@/app/_components/icons/SelectingDateIcon";
import SelectingDate from "@/app/_components/SelectingDate";
import CompleteInformation from "@/app/_components/CompleteInformation";
import Payment from "@/app/_components/Payment";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useData } from "@/context/DataContext";
import SuccessfullyPayment from "@/app/_components/SuccessfullyPayment";
import FailedPayment from "@/app/_components/FailedPayment";

const steps = [
  {
    id: 1,
    label: "اختيار موعد",
    icon: <SelectingDateIcon />,
    key: "selectingDate",
  },
  {
    id: 2,
    label: "استكمال المعلومات",
    icon: <MedicalInformationIcon />,
    key: "completeInformation",
  },
  { id: 3, label: "الدفع", icon: <PaymentIcon />, key: "payment" },
  {
    id: 4,
    label: "الإيصال",
    icon: <RecieptIcon />,
    key: "successfullyPaymeny",
  },
];

export default function Page() {
  const [activeItem, setActiveItem] = useState("selectingDate");

  const { doctorId } = useParams();
  const { featuredDoctors } = useData();

  const doctor = featuredDoctors.find((c) => String(c.id) === doctorId);

  // find the current step index
  const currentStep = steps.findIndex((s) => s.key === activeItem) + 1;

  const renderContent = () => {
    switch (activeItem) {
      case "selectingDate":
        return <SelectingDate setActiveItem={setActiveItem} doctor={doctor} />;
      case "completeInformation":
        return <CompleteInformation setActiveItem={setActiveItem} />;
      case "payment":
        return <Payment setActiveItem={setActiveItem} />;
      case "successfullyPaymeny":
        return <SuccessfullyPayment />;
      case "failedPaymeny":
        return <FailedPayment />;
      default:
        return <SelectingDate setActiveItem={setActiveItem} />;
    }
  };

  return (
    <div className="template mt-20">
      {/* Progress bar */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-center items-center w-full md:w-full max-w-[691px] lg:mr-30 mr-0">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center flex-1 lg:last:flex-1 last:flex-none"
            >
              {/* Step circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex justify-center items-center p-3 sm:p-5 rounded-full ${
                    step.id === currentStep
                      ? "bg-[#FFC383] text-[#E37600]"
                      : step.id < currentStep
                      ? "bg-[#FFF1E3] text-[#713B00] border border-[#FFE4C6]"
                      : "bg-[#DADADA] text-white"
                  }`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px]">
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(to left, ${
                        step.id < currentStep ? "#FFC383" : "#DADADA"
                      }, #DADADA)`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Labels under steps */}
        <div className="flex justify-between items-center w-full max-w-[691px]  px-0 md-px-14 ">
          {steps.map((step) => (
            <p
              key={step.id}
              className={`text-center font-bold text-xs sm:text-sm md:text-lg max-w-[60px] sm:max-w-[100px] ${
                step.id === currentStep
                  ? "text-[#E37600]"
                  : step.id < currentStep
                  ? "text-[#713B00]"
                  : "text-[#DADADA]"
              } ${step.label === "الدفع" ? "ml-12" : ""}}`}
            >
              {step.label}
            </p>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-10">{renderContent()}</div>
    </div>
  );
}
