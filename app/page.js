import Script from "next/script";
import Image from "next/image";

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
import ContactSection from "@/components/ebook/ContactSection";
import FrequentQuestions from "@/components/ebook/FrequentQuestions";

export default function LandingPage() {
  return (
    <>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="26d13f48-d070-4dc2-920a-0610ce307061"
      />
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1692875598228830');
          fbq('track', 'PageView');
        `}
      </Script>
      <Image
        alt="Meta Pixel"
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1692875598228830&ev=PageView&noscript=1"
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
        <FrequentQuestions />
        <ContactSection />
        <Footer />
        <Message />
      </div>
    </>
  );
}
