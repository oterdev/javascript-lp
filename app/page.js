import Header from "@/components/ebook/Header";
import HeroSection from "@/components/ebook/HeroSection";
import ProblemSection from "@/components/ebook/ProblemSection";
import TableOfContents from "@/components/ebook/TableOfContents";
import AudienceSection from "@/components/ebook/AudienceSection";
import FeaturesList from "@/components/ebook/FeaturesList";
import SampleForm from "@/components/ebook/SampleForm";
import Testimonials from "@/components/ebook/Testimonials";
import AuthorInfo from "@/components/ebook/AuthorInfo";
import FinalCTA from "@/components/ebook/FinalCTA";
import DiscountSection from "@/components/ebook/DiscountSection";
import Footer from "@/components/ebook/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <Header />
      <HeroSection />
      <ProblemSection />
      <TableOfContents />
      <FeaturesList />
      <SampleForm />
      <AudienceSection />
      <Testimonials />
      <FinalCTA />
      <AuthorInfo />
      <DiscountSection />
      <Footer />
    </div>
  );
}
