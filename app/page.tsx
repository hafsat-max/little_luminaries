import { HeaderStrip } from '@/components/header-strip';
import { Navbar } from '@/components/navbar';
import { AboutSection } from '@/components/sections/about-section';
import { CourseSection } from '@/components/sections/courses-section';
import { CTASection } from '@/components/sections/cta-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { TestimonialSection } from '@/components/sections/testimonial-section';

export default function Home() {
  return (
    <div className="">
      <HeaderStrip />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CourseSection />
      <FeaturesSection />
      <CTASection />
      <TestimonialSection />
      <Footer/>
    </div>
  );
}
