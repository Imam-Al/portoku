import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ResearchSection from '@/components/ResearchSection'
import PublicationsSection from '@/components/PublicationsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import CertificatesSection from '@/components/CertificatesSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'

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
      <BlogSection />
      <ContactSection />
    </>
  )
}
