import DoctorCardList from "./_components/FeaturedDoctors";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LabbaassFeatures from "./_components/LabbaassFeatures";
import WhyChooseUs from "./_components/WhyChooseUs";
import ClinicsList from "./_components/ClinicsList";
import LatestPosts from "./_components/LatestPosts";
import UsersOpinions from "./_components/UsersOpinions";
import FrequentlyAskedQuestions from "./_components/FrequentlyAskedQuestions ";
import AppDownloadSection from "./_components/AppDownloadSection";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute -top-20 -left-28 -z-10 w-[700px] h-[800px] rounded-[100px] bg-accent-400 opacity-50"></div>
      <div className="absolute -top-20 -right-20 -z-10 w-[200px] h-[250px] rounded-[60px] bg-accent-300 opacity-40"></div>
      <Header />
      <Hero />
      <WhyChooseUs />
      <LabbaassFeatures />
      <DoctorCardList />
      <ClinicsList />
      <LatestPosts />
      <UsersOpinions />
      <FrequentlyAskedQuestions />
      <AppDownloadSection />
      <Footer />
    </main>
  );
}
