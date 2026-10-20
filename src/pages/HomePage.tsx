import AboutSkillsTeaser from "@/components/home/AboutSkillsTeaser";
import ContactCta from "@/components/home/ContactCta";
import FeaturedProjectPreview from "@/components/home/FeaturedProjectPreview";
import Hero from "@/components/home/Hero";
import ResumeHighlightsTeaser from "@/components/home/ResumeHighlightsTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjectPreview />
      <AboutSkillsTeaser />
      <ResumeHighlightsTeaser />
      <ContactCta />
    </>
  );
}
