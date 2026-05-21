import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ResearchSection />
      <PublicationsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificatesSection />
      <AchievementsSection />
      <BlogSection />
      {/* <GallerySection /> */}
      <ContactSection />
    </>
  );
}
