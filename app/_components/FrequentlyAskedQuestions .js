"use client";
import { useData } from "@/context/DataContext";
import QuestionCard from "./QuestionCard";
import SectionHeader from "./SectionHeader";

function FrequentlyAskedQuestions() {
  const { faqs } = useData();
  return (
    <section className="py-16 lg:px-[150px] md:px-16 px-4">
      <SectionHeader
        title="الأسئلة الشائعة للدكتور"
        linkHref="/faqs"
        linkText="عرض الكل"
      />
      <div className="flex flex-col gap-2 md:gap-4 pb-4">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <QuestionCard {...faq} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
