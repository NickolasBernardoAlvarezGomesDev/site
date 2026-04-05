import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofBarSection } from "@/components/sections/ProofBarSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";

export function HomePage() {
  return (
    <main className="page-main home-page">
      <HeroSection />
      <ProofBarSection />
      <FeaturedProjectsSection />
      <ExpertiseSection />
      <ExperienceSection />
      <SocialProofSection />
      <AboutPreviewSection />
      <ContactSection />
    </main>
  );
}
