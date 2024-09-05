import Header from "@/components/ebook/Header";
import HeroSection from "@/components/ebook/HeroSection";
import ProblemSection from "@/components/ebook/ProblemSection";
import AudienceSection from "@/components/ebook/AudienceSection";
import FeaturesList from "@/components/ebook/FeaturesList";
import SampleForm from "@/components/ebook/SampleForm";
import Testimonials from "@/components/ebook/Testimonials";
import AuthorInfo from "@/components/ebook/AuthorInfo";
import FinalCTA from "@/components/ebook/FinalCTA";
import DiscountSection from "@/components/ebook/DiscountSection";
import Footer from "@/components/ebook/Footer";
import Script from "next/script";
import Payment from "@/components/ebook/Payment";

export default function LandingPage() {
  return (
    <>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="5133a60d-a411-4c85-8f3f-f56d17c88d2c"
      />
      <div className="min-h-screen text-[#343434]">
        <Header />
        <HeroSection />
        <ProblemSection />
        <FeaturesList />
        <SampleForm />
        <AudienceSection />
        <Testimonials />
        <FinalCTA />
        <AuthorInfo />
        <DiscountSection />
        <Payment />
        <Footer />
      </div>
    </>
  );
}
