import Script from "next/script";

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
import Payment from "@/components/ebook/Payment";
import Message from "@/components/ebook/Message";

export default function LandingPage() {
  return (
    <>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="26d13f48-d070-4dc2-920a-0610ce307061"
      />

      <div className="min-h-screen text-[#343434]">
        <Header />
        <HeroSection />
        <ProblemSection />
        <FeaturesList />
        <SampleForm
          serviceId={process.env.EMAILJS_SERVICE_ID}
          publicKey={process.env.EMAILJS_PUBLIC_KEY}
        />
        <AudienceSection />
        <Testimonials />
        <FinalCTA />
        <AuthorInfo />
        <DiscountSection />
        <Payment />
        <Footer />
        <Message />
      </div>
    </>
  );
}
